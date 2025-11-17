"use client";

import { usePathname } from "next/navigation";

import { useTodo } from "@/store/todoStore";

import TaskCard from "@/components/ui/TaskCard";
import NotFound from "@/app/not-found";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

const ListPage = () => {
  const slug = usePathname();
  const { lists } = useTodo();
  const activeList = lists.find((list) => "/tasks/" + list.id === slug);

  if (!activeList) {
    return <NotFound />;
  }

  return (
    <section className="py-4">
      <div className="text-sm flex justify-start items-center">
        <Link
          href="/tasks"
          className="bg-neutral-900 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-900 px-2 py-1 rounded-2xl flex items-center"
        >
          <LuChevronLeft />
          back
        </Link>
      </div>
      <div className="my-4 grid grid-cols-2 gap-8">
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
