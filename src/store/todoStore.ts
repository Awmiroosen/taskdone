"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";
import { TodoStore } from "@/types/Todos";

export const useTodo = create<TodoStore>()(
  persist(
    (set) => ({
      lists: [],
      pinLists: [],

      addList: (title) =>
        set((state) => ({
          lists: [
            ...state.lists,
            {
              title,
              id: uuid(),
              done: false,
              todos: [],
              editedAt: new Date().toISOString(),
            },
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
                    editedAt: new Date().toISOString(),
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
                    {
                      title,
                      listTitle: list.title,
                      id: uuid(),
                      done: false,
                      editedAt: new Date().toISOString(),
                    },
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
                    item.id === todoId
                      ? {
                          ...item,
                          editedAt: new Date().toISOString(),
                          done: !item.done,
                        }
                      : item
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

      addPinList: (listId) =>
        set((state) => {
          const isList = state.lists.find((list) => list.id === listId);
          if (!isList) return {};
          if (state.pinLists.some((list) => list.id === listId)) return {};
          return {
            pinLists: [...state.pinLists, isList],
          };
        }),

      deletePinList: (listId) =>
        set((state) => ({
          pinLists: state.pinLists.filter((list) => list.id !== listId),
        })),
    }),

    {
      name: "todo-app",
    }
  )
);
