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
            {
              title,
              id: uuid(),
              done: false,
              todos: [],
              editedAt: new Date().toISOString(),
            },
            ...state.lists,
          ],
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
                  done: false,
                  todos: [
                    {
                      title,
                      listTitle: list.title,
                      id: uuid(),
                      done: false,
                      listId: listId,
                      editedAt: new Date().toISOString(),
                    },
                    ...list.todos,
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
                  done: list.todos.every((item) =>
                    item.id === todoId ? !item.done : item.done
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

                  done: list.todos
                    .filter((item) => item.id !== todoId)
                    .every((item) => item.done),
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
