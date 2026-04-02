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

const steps = [
  {
    title: "Capture fast",
    text: "Use the task editor on the main tab to add or refine work without leaving the list.",
  },
  {
    title: "Toggle progress inline",
    text: "Tap the leading status control on any task to close it or reopen it immediately.",
  },
  {
    title: "Review the board",
    text: "Use Insights to check pace and trim the queue before it gets noisy.",
  },
];

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sheet}>
        <View style={styles.handle} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <Text style={styles.eyebrow}>Quick start</Text>
          <Text style={styles.title}>Three moves keep this app useful.</Text>
          <Text style={styles.subtitle}>
            This stays as a mobile sheet, with stacked actions and enough space for
            small screens.
          </Text>

          <View style={styles.steps}>
            {steps.map((step, index) => (
              <View key={step.title} style={styles.stepCard}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <View style={styles.stepCopy}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepText}>{step.text}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <Link href="/" dismissTo asChild>
              <Pressable style={styles.primaryButton}>
                <MaterialIcons
                  name="check-circle"
                  size={18}
                  color={AppColors.cardStrong}
                />
                <Text style={styles.primaryButtonText}>Back to Tasks</Text>
              </Pressable>
            </Link>

            <Link href="/explore" dismissTo asChild>
              <Pressable style={styles.secondaryButton}>
                <MaterialIcons name="bar-chart" size={18} color={AppColors.ink} />
                <Text style={styles.secondaryButtonText}>Open Insights</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.backgroundMuted,
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: AppColors.cardStrong,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 14,
    minHeight: "72%",
    maxHeight: "92%",
  },
  content: {
    paddingHorizontal: 18,
    paddingBottom: 28,
  },
  handle: {
    alignSelf: "center",
    width: 54,
    height: 6,
    borderRadius: 999,
    backgroundColor: AppColors.line,
    marginBottom: 16,
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
  steps: {
    marginTop: 22,
    gap: 12,
  },
  stepCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    borderRadius: 20,
    backgroundColor: AppColors.card,
    padding: 16,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  stepNumber: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.accentSoft,
  },
  stepNumberText: {
    color: AppColors.accentStrong,
    fontWeight: "800",
  },
  stepCopy: {
    flex: 1,
  },
  stepTitle: {
    color: AppColors.ink,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: Fonts?.rounded,
  },
  stepText: {
    marginTop: 4,
    color: AppColors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    gap: 10,
    marginTop: 22,
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 18,
    paddingVertical: 15,
    backgroundColor: AppColors.accent,
  },
  primaryButtonText: {
    color: AppColors.cardStrong,
    fontSize: 15,
    fontWeight: "700",
  },
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 18,
    paddingVertical: 15,
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