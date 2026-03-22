import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoItem from "../components/TodoItem";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todoApi";
import { Todo } from "../types/todo";

export default function TodoScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const [text, setText] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  // Получение списка задач
  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Создание новой задачи
  const handleCreate = async () => {
    if (!text.trim()) return;
    try {
      const newTodo = await createTodo(text);
      setTodos((prev) => [newTodo, ...prev]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  // Нажатие Edit
  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
    setText(todo.todo_text);
  };

  // Обновление существующей задачи
  const handleUpdate = async () => {
    if (!editingTodo || !text.trim()) return;
    try {
      const updated = await updateTodo(editingTodo.id, text);
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
      setEditingTodo(null);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  // Удаление задачи
  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Ввод текста */}
      <TextInput
        placeholder="Enter note..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      {/* Кнопка создания или обновления */}
      {editingTodo ? (
        <Button title="Update note" onPress={handleUpdate} />
      ) : (
        <Button title="Create new note" onPress={handleCreate} />
      )}

      {/* Список задач */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={handleDelete} onEdit={handleEdit} />
        )}
        ListEmptyComponent={<Text>Нет задач</Text>}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});