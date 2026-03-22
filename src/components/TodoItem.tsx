import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

export default function TodoItem({ todo, onDelete, onEdit }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.todo_text}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => onEdit(todo)}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: {
    color: "blue",
  },
  delete: {
    color: "red",
  },
});