"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";
import { TodoStore } from "@/types/Todos";

export const useTodo = create<TodoStore>()(
  persist(
    (set) => ({
      lists: [],

      addList: (title) =>
        set((state) => ({
          lists: [
            ...state.lists,
            { title, id: uuid(), done: false, todos: [] },
          ],
        })),

      doneList: (listId) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  done: !list.done,
                  todos: list.todos.map((todo) => ({
                    ...todo,
                    done: !todo.done,
                  })),
                }
              : list
          ),
        })),

      deleteList: (listId) =>
        set((state) => ({
          lists: state.lists.filter((item) => item.id !== listId),
        })),

      addTodo: (listId, title) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  todos: [
                    ...list.todos,
                    { title, listTitle: list.title, id: uuid(), done: false },
                  ],
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
    }),

    {
      name: "todo-app",
    }
  )
);
