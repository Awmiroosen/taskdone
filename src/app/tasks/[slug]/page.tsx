"use client";

import { usePathname } from "next/navigation";

import { useTodo } from "@/store/todoStore";

import TaskCard from "@/components/ui/TaskCard";
import NotFound from "@/app/not-found";
import Link from "next/link";
import {
  LuChevronLeft,
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

  const tasksCount = activeList.todos.length
  const doneTasks = activeList.todos.filter(item => item.done === true).length

  const btnStyle =
    "flex justify-center mx-1 items-center px-3 py-0.5 rounded-2xl text-[0.8rem] font-light select-none";

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
          className="w-full bg-neutral-300 dark:bg-neutral-800 focus:outline-0 border-2  rounded-3xl p-2"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
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
      <div className="w-full my-8 grid grid-cols-2 place-items-center">
        <div>
          <span className={`${btnStyle} bg-neutral-300 dark:bg-neutral-700`}>
            <LuCalendarFold className="mr-1 mb-0.5" /> total: {tasksCount}
          </span>
        </div>
        <div>
          <span className={`${btnStyle} bg-neutral-300 dark:bg-neutral-700`}>
            <LuCalendarCheck2 className="mr-1 mb-0.5" /> done: {doneTasks}
          </span>
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
