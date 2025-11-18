"use client";

import { usePathname } from "next/navigation";

import { useTodo } from "@/store/todoStore";

import TaskCard from "@/components/ui/TaskCard";
import NotFound from "@/app/not-found";
import Link from "next/link";
import {
  LuChevronLeft,
  LuPlus,
  LuCalendarFold,
  LuCalendarCheck2,
} from "react-icons/lu";
import { useState } from "react";

const ListPage = () => {
  const slug = usePathname();
  const { lists, addTodo } = useTodo();
  const activeList = lists.find((list) => "/tasks/" + list.id === slug);

  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    const iTitle = inputValue.trim();
    if (iTitle && activeList) {
      addTodo?.(activeList.id, iTitle);
    }
    setInputValue("");
  };

  if (!activeList) {
    return <NotFound />;
  }

  console.log(activeList.todos.filter((item) => item.done).length);
  return (
    <section className="py-4 my-8">
      <div className="text-sm flex justify-start items-center">
        <Link
          href="/tasks"
          className="bg-neutral-900 hover:bg-neutral-700 text-neutral-200 dark:bg-neutral-200 dark:hover:bg-neutral-300 dark:text-neutral-900 transition-colors duration-150 px-2 py-1 rounded-2xl flex items-center"
        >
          <LuChevronLeft className="mb-1" />
          back
        </Link>
      </div>

      <form
        className="w-full flex my-8 px-1"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input
          type="text"
          placeholder="Add your tasks"
          className="w-10/12 bg-neutral-300 dark:bg-neutral-800 focus:outline-0 border-2  rounded-l-3xl p-2"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          onClick={() => handleAdd()}
          className="w-2/12 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors duration-150 cursor-pointer flex justify-center items-center rounded-r-3xl"
        >
          <LuPlus size={25} />
        </button>
      </form>

      <div className="w-full my-8 flex justify-center items-center select-none">
        <div className="flex bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900 px-4 py-1 rounded-2xl">
          {activeList.todos.filter((item) => item.done).length !==
          activeList.todos.length ? (
            <LuCalendarFold size={22} />
          ) : (
            <LuCalendarCheck2 size={22} />
          )}
          <h3 className="mx-1 text-xl font-semibold">Tasks</h3>
        </div>
      </div>
      <div className="my-4 mx-4 grid grid-cols-1 gap-8 ">
        {activeList?.todos.map((todo) => (
          <TaskCard
            key={todo.id}
            {...todo}
            listId={activeList.id}
            listTitle={activeList.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ListPage;
