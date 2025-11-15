"use client";

import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { TodoStore } from "@/types/Todos";

export const useTodo = create<TodoStore>((set) => ({
  lists: [],

  addList: (title) =>
    set((state) => ({
      lists: [...state.lists, { title, id: uuid(), done: false, todos: [] }],
    })),

  doneList: (listId) =>
    set((list) => ({
      lists: list.lists.map((item) =>
        item.id === listId ? { ...item, done: !item.done } : item
      ),
    })),

  deleteList: (listId) =>
    set((list) => ({
      lists: list.lists.filter((item) => item.id !== listId),
    })),

  addTodo: (listId, title) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              todos: [...list.todos, { title, id: uuid(), done: false }],
            }
          : list
      ),
    })),

  doneTodo: (listId, todoId) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              todos: list.todos.map((item) =>
                item.id === todoId ? { ...item, done: !item.done } : item
              ),
            }
          : list
      ),
    })),

  deleteTodo: (listId, todoId) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              todos: list.todos.filter((item) => item.id !== todoId),
            }
          : list
      ),
    })),
}));
