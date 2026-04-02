import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useIsFocused } from "@react-navigation/native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AppColors, Fonts } from "@/constants/theme";
import { getTodos } from "@/services/todoApi";
import { Todo } from "@/types/todo";

export default function InsightsScreen() {
  const isFocused = useIsFocused();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiNotice, setApiNotice] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);

      try {
        const data = await getTodos();
        setTodos(data);
        setApiNotice(null);
      } catch (error) {
        console.error(error);
        setTodos([]);
        setApiNotice("Live insights need the backend running on port 5000.");
      } finally {
        setLoading(false);
      }
    };

    if (isFocused) {
      void fetchTodos();
    }
  }, [isFocused]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={AppColors.accent} />
      </SafeAreaView>
    );
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.is_completed).length;
  const activeTodos = totalTodos - completedTodos;
  const completionRate =
    totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  const momentumTitle =
    completionRate >= 75
      ? "Momentum is high"
      : completionRate >= 40
        ? "The pace is solid"
        : "The board needs a push";

  const momentumCopy =
    completionRate >= 75
      ? "Most of the board is already closed out. Keep the queue short and protect that focus."
      : completionRate >= 40
        ? "There is visible movement. Tighten the active list and finish the easy wins first."
        : "A large share of the work is still open. Reduce the list before adding more.";

  const metrics = [
    {
      icon: "check-circle",
      label: "Finished",
      value: completedTodos.toString(),
      tone: styles.successCard,
    },
    {
      icon: "pending-actions",
      label: "Open",
      value: activeTodos.toString(),
      tone: styles.warningCard,
    },
    {
      icon: "donut-large",
      label: "Completion",
      value: `${completionRate}%`,
      tone: styles.accentCard,
    },
  ];

  const principles = [
    "Keep fewer active tasks than you think you need.",
    "Use the edit state to sharpen wording before work starts.",
    "Close tasks aggressively so the board stays readable.",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <Text style={styles.eyebrow}>Insights</Text>
          <Text style={styles.title}>A quick phone view of board health.</Text>
          <Text style={styles.subtitle}>
            Check pace, spot overload, and jump back into the list without leaving
            the mobile flow.
          </Text>
        </View>

        {apiNotice ? (
          <View style={styles.noticeCard}>
            <MaterialIcons name="wifi-off" size={18} color={AppColors.secondary} />
            <Text style={styles.noticeText}>{apiNotice}</Text>
          </View>
        ) : null}

        <View style={styles.sectionCard}>
          <Text style={styles.sectionEyebrow}>Live snapshot</Text>
          <Text style={styles.sectionTitle}>The board currently holds {totalTodos} tasks.</Text>

          <View style={styles.metricStack}>
            {metrics.map((metric) => (
              <View key={metric.label} style={[styles.metricCard, metric.tone]}>
                <View style={styles.metricHeader}>
                  <MaterialIcons name={metric.icon as never} size={18} color={AppColors.ink} />
                  <Text style={styles.metricLabel}>{metric.label}</Text>
                </View>
                <Text style={styles.metricValue}>{metric.value}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionEyebrow}>Momentum</Text>
          <Text style={styles.sectionTitle}>{momentumTitle}</Text>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${Math.max(completionRate, totalTodos === 0 ? 10 : 16)}%` },
              ]}
            />
          </View>

          <Text style={styles.bodyCopy}>{momentumCopy}</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionEyebrow}>Next stops</Text>
          <Text style={styles.sectionTitle}>Move through the app with intent.</Text>

          <Link href="/modal" asChild>
            <Pressable style={styles.routeCard}>
              <View style={styles.routeIcon}>
                <MaterialIcons name="menu-book" size={20} color={AppColors.accentStrong} />
              </View>
              <View style={styles.routeCopy}>
                <Text style={styles.routeTitle}>Quick start guide</Text>
                <Text style={styles.routeText}>
                  Open the modal playbook for the fastest path through the app.
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color={AppColors.muted} />
            </Pressable>
          </Link>

          <Link href="/workspace" asChild>
            <Pressable style={styles.routeCard}>
              <View style={[styles.routeIcon, styles.routeIconSecondary]}>
                <MaterialIcons name="tune" size={20} color={AppColors.secondary} />
              </View>
              <View style={styles.routeCopy}>
                <Text style={styles.routeTitle}>Workspace setup</Text>
                <Text style={styles.routeText}>
                  Review preferences, navigation, and the app{"'"}s design direction.
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color={AppColors.muted} />
            </Pressable>
          </Link>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionEyebrow}>Operating principles</Text>
          <Text style={styles.sectionTitle}>A board stays useful when it stays small.</Text>

          {principles.map((principle) => (
            <View key={principle} style={styles.principleRow}>
              <View style={styles.principleDot} />
              <Text style={styles.principleText}>{principle}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.background,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 120,
    gap: 14,
  },
  heroCard: {
    backgroundColor: AppColors.cardStrong,
    borderRadius: 26,
    padding: 20,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  eyebrow: {
    color: AppColors.secondary,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  title: {
    color: AppColors.ink,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "800",
    fontFamily: Fonts?.rounded,
  },
  subtitle: {
    marginTop: 12,
    color: AppColors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  noticeCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: AppColors.secondarySoft,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  noticeText: {
    flex: 1,
    color: AppColors.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionCard: {
    backgroundColor: AppColors.card,
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  sectionEyebrow: {
    color: AppColors.secondary,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  sectionTitle: {
    color: AppColors.ink,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: Fonts?.rounded,
  },
  metricStack: {
    gap: 10,
    marginTop: 16,
  },
  metricCard: {
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  successCard: {
    backgroundColor: AppColors.successSoft,
  },
  warningCard: {
    backgroundColor: AppColors.warningSoft,
  },
  accentCard: {
    backgroundColor: AppColors.accentSoft,
  },
  metricHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  metricLabel: {
    color: AppColors.ink,
    fontSize: 13,
    fontWeight: "700",
  },
  metricValue: {
    marginTop: 12,
    color: AppColors.ink,
    fontSize: 28,
    fontWeight: "800",
    fontFamily: Fonts?.rounded,
  },
  progressTrack: {
    height: 14,
    backgroundColor: AppColors.backgroundMuted,
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 16,
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: AppColors.accent,
  },
  bodyCopy: {
    marginTop: 12,
    color: AppColors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  routeCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: AppColors.cardStrong,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: AppColors.border,
    marginTop: 12,
  },
  routeIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.accentSoft,
  },
  routeIconSecondary: {
    backgroundColor: AppColors.secondarySoft,
  },
  routeCopy: {
    flex: 1,
  },
  routeTitle: {
    color: AppColors.ink,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: Fonts?.rounded,
  },
  routeText: {
    marginTop: 4,
    color: AppColors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  principleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 14,
  },
  principleDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    marginTop: 7,
    backgroundColor: AppColors.accent,
  },
  principleText: {
    flex: 1,
    color: AppColors.text,
    fontSize: 15,
    lineHeight: 22,
  },
});