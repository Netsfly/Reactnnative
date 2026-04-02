import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AppColors, Fonts } from "@/constants/theme";

const preferences = ["Warm palette", "Rounded tabs", "Fast capture"];
const rituals = [
  "Review the active list before adding anything new.",
  "Use Insights when the board starts feeling noisy.",
  "Treat completed work as signal, not storage.",
];

export default function WorkspaceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <Text style={styles.eyebrow}>Workspace setup</Text>
          <Text style={styles.title}>Tune the app before the day gets noisy.</Text>
          <Text style={styles.subtitle}>
            This screen is now arranged for a phone, with compact sections and
            full-width actions instead of broader overview panels.
          </Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.sectionEyebrow}>Current direction</Text>
          <Text style={styles.sectionTitle}>Clean, warm, and task-first.</Text>

          <View style={styles.preferenceRow}>
            {preferences.map((preference) => (
              <View key={preference} style={styles.preferenceChip}>
                <Text style={styles.preferenceText}>{preference}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.panel}>
          <Text style={styles.sectionEyebrow}>Recommended rhythm</Text>
          <Text style={styles.sectionTitle}>Keep the workflow intentionally small.</Text>

          {rituals.map((ritual) => (
            <View key={ritual} style={styles.ritualRow}>
              <View style={styles.ritualIcon}>
                <MaterialIcons name="done" size={16} color={AppColors.accentStrong} />
              </View>
              <Text style={styles.ritualText}>{ritual}</Text>
            </View>
          ))}
        </View>

        <View style={styles.navigationCard}>
          <Text style={styles.sectionEyebrow}>Navigation</Text>
          <Text style={styles.sectionTitle}>Jump back into the main flow.</Text>

          <View style={styles.navigationActions}>
            <Link href="/" asChild>
              <Pressable style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Back to Tasks</Text>
              </Pressable>
            </Link>

            <Link href="/explore" asChild>
              <Pressable style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Open Insights</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 36,
    gap: 14,
  },
  heroCard: {
    backgroundColor: AppColors.cardStrong,
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: AppColors.border,
    alignItems: "flex-start",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: AppColors.accentSoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: AppColors.accentStrong,
    fontSize: 28,
    fontWeight: "800",
    fontFamily: Fonts?.rounded,
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
  panel: {
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
  preferenceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16,
  },
  preferenceChip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  preferenceText: {
    color: AppColors.ink,
    fontWeight: "700",
  },
  ritualRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 14,
  },
  ritualIcon: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: AppColors.accentSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  ritualText: {
    flex: 1,
    color: AppColors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  navigationCard: {
    backgroundColor: AppColors.cardStrong,
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  navigationActions: {
    gap: 10,
    marginTop: 18,
  },
  primaryButton: {
    alignItems: "center",
    borderRadius: 18,
    paddingVertical: 14,
    backgroundColor: AppColors.accent,
  },
  primaryButtonText: {
    color: AppColors.cardStrong,
    fontSize: 15,
    fontWeight: "700",
  },
  secondaryButton: {
    alignItems: "center",
    borderRadius: 18,
    paddingVertical: 14,
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  secondaryButtonText: {
    color: AppColors.ink,
    fontSize: 15,
    fontWeight: "700",
  },
});