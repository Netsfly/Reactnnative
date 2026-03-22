// src/services/todoApi.ts
import { Todo } from "../types/todo";

const BASE_URL = "http://192.168.0.104:5000"; // ⚠️ убедись, что этот IP доступен для устройства
const API_URL = `${BASE_URL}/todos`;

/**
 * Получить все задачи
 */
export const getTodos = async (): Promise<Todo[]> => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error fetching todos: ${res.status}`);
    const data: Todo[] = await res.json();
    return data;
  } catch (error) {
    console.error("getTodos error:", error);
    throw error;
  }
};

/**
 * Создать новую задачу
 */
export const createTodo = async (text: string): Promise<Todo> => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo_text: text.trim() }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Error creating todo: ${res.status} - ${errText}`);
    }

    // Сервер может вернуть 204 No Content, тогда создаем объект вручную
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data: Todo = await res.json();
      return data;
    }

    // Если JSON нет, создаем минимальный объект
    return { id: Date.now(), todo_text: text, is_completed: false };
  } catch (error) {
    console.error("createTodo error:", error);
    throw error;
  }
};

/**
 * Удалить задачу
 */
export const deleteTodo = async (id: number): Promise<void> => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Error deleting todo: ${res.status} - ${errText}`);
    }
  } catch (error) {
    console.error("deleteTodo error:", error);
    throw error;
  }
};

/**
 * Обновить задачу
 */
export const updateTodo = async (id: number, text: string): Promise<Todo> => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo_text: text.trim() }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Error updating todo: ${res.status} - ${errText}`);
    }

    const data: Todo = await res.json();
    return data;
  } catch (error) {
    console.error("updateTodo error:", error);
    throw error;
  }
};