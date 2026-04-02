import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AppColors, Fonts } from "@/constants/theme";
import { Todo } from "../types/todo";

type TodoItemProps = {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (todoId: number) => void;
  onToggleComplete: (todo: Todo) => void;
  isDeleting?: boolean;
  isToggling?: boolean;
};

export default function TodoItem({
  todo,
  onEdit,
  onDelete,
  onToggleComplete,
  isDeleting = false,
  isToggling = false,
}: TodoItemProps) {
  const isBusy = isDeleting || isToggling;

  return (
    <View style={styles.item}>
      <Pressable
        disabled={isBusy}
        onPress={() => onToggleComplete(todo)}
        style={({ pressed }) => [
          styles.toggleButton,
          todo.is_completed && styles.toggleButtonActive,
          pressed && styles.pressed,
          isBusy && styles.disabledButton,
        ]}>
        {isToggling ? (
          <ActivityIndicator color={AppColors.accentStrong} size="small" />
        ) : (
          <MaterialIcons
            name={todo.is_completed ? "check-circle" : "radio-button-unchecked"}
            size={30}
            color={todo.is_completed ? AppColors.accentStrong : AppColors.muted}
          />
        )}
      </Pressable>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, todo.is_completed && styles.completedTitle]}>
            {todo.todo_text}
          </Text>

          <Text style={styles.subtitle}>
            {todo.is_completed
              ? "Wrapped up and moved out of the active queue."
              : "Still open and ready for the next push."}
          </Text>

          <View
            style={[
              styles.statusBadge,
              todo.is_completed ? styles.completedBadge : styles.pendingBadge,
            ]}>
            <Text
              style={[
                styles.statusText,
                todo.is_completed
                  ? styles.completedStatusText
                  : styles.pendingStatusText,
              ]}>
              {todo.is_completed ? "Done" : "Open"}
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Pressable
            disabled={isBusy}
            onPress={() => onEdit(todo)}
            style={({ pressed }) => [
              styles.actionButton,
              styles.secondaryButton,
              pressed && styles.pressed,
              isBusy && styles.disabledButton,
            ]}>
            <MaterialIcons name="edit" size={16} color={AppColors.ink} />
            <Text style={styles.secondaryButtonText}>Edit</Text>
          </Pressable>

          <Pressable
            disabled={isBusy}
            onPress={() => onDelete(todo.id)}
            style={({ pressed }) => [
              styles.actionButton,
              styles.deleteButton,
              pressed && styles.pressed,
              isBusy && styles.disabledButton,
            ]}>
            <MaterialIcons
              name="delete-outline"
              size={16}
              color={AppColors.danger}
            />
            <Text style={styles.deleteButtonText}>
              {isDeleting ? "Removing" : "Delete"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: AppColors.cardStrong,
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: AppColors.border,
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  toggleButton: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  toggleButtonActive: {
    backgroundColor: AppColors.accentSoft,
    borderColor: AppColors.accentSoft,
  },
  content: {
    flex: 1,
  },
  header: {
    gap: 8,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
    color: AppColors.ink,
    fontFamily: Fonts?.rounded,
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: AppColors.muted,
  },
  subtitle: {
    color: AppColors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  statusBadge: {
    alignSelf: "flex-start",
    marginTop: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  completedBadge: {
    backgroundColor: AppColors.successSoft,
  },
  pendingBadge: {
    backgroundColor: AppColors.secondarySoft,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  completedStatusText: {
    color: AppColors.success,
  },
  pendingStatusText: {
    color: AppColors.secondary,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    flex: 1,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  secondaryButton: {
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  deleteButton: {
    backgroundColor: AppColors.dangerSoft,
  },
  secondaryButtonText: {
    color: AppColors.ink,
    fontWeight: "700",
  },
  deleteButtonText: {
    color: AppColors.danger,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.82,
  },
  disabledButton: {
    opacity: 0.55,
  },
});