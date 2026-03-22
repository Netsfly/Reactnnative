import { useEffect, useState } from "react";
import { createTodo, deleteTodo, getTodos } from "../services/todoApi";
import { Todo } from "../types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

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

  const addTodo = async (text: string) => {
    const newTodo = await createTodo(text);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading, addTodo, removeTodo };
};