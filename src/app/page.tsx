"use client";

import ListCard from "@/components/ui/ListCard";
import TaskCard from "@/components/ui/TaskCard";
import { useTodo } from "@/store/todoStore";
import { LuCalendarFold, LuFilePen, LuFolder } from "react-icons/lu";
const Home = () => {
  const { lists } = useTodo();

  const latestLists = lists.slice(0, 4);

  const latestTasks = lists
    .flatMap((list) => list.todos)
    .sort(
      (a, b) =>
        new Date(b.editedAt ?? 0).getTime() -
        new Date(a.editedAt ?? 0).getTime()
    )
    .slice(0, 4);


  return (
    <>
      <header className="w-full h-12 my-4 flex justify-center items-center">
        <h1 className="text-3xl font-black">Taskdone</h1>
      </header>

      <section className="mb-20 px-2">
        <div className="w-full my-8 flex justify-center items-center select-none">
          <div className="flex bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900 px-4 py-1 rounded-2xl">
            <LuCalendarFold size={22} />
            <h3 className="mx-1 text-xl font-semibold">Latest Tasks</h3>
          </div>
        </div>

        {latestTasks.length ? (
          <div className="grid grid-cols-2 gap-8">
            {latestTasks.map((task, idx) => (
              <TaskCard key={idx} {...task} />
            ))}
          </div>
        ) : (
          <div>
            <div className="w-full h-52 flex justify-center items-center text-xl text-neutral-400">
              <LuFilePen className="mx-2 mb-1" size={25} />
              Add Your Tasks
            </div>
          </div>
        )}
      </section>

      <section className="mb-32 px-4">
        <div className="w-full my-8 flex justify-center items-center select-none">
          <div className="flex bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900 px-4 py-1 rounded-2xl">
            <LuFolder size={22} />
            <h3 className="mx-1 text-xl font-semibold">Latest Lists</h3>
          </div>
        </div>

        {latestLists.length ? (
          <div className="flex flex-col gap-8">
            {latestLists.map((list, idx) => (
              <ListCard
                key={idx}
                {...list}
                listLength={list.todos.length}
                editedAt={
                  list.editedAt
                    ? new Date(list.editedAt).toLocaleTimeString()
                    : "N/A"
                }
                link={`/tasks/${list.id}`}
                doneCount={list.todos.filter((item) => item.done).length}
                trash={false}
              />
            ))}
          </div>
        ) : (
          <div>
            <div className="w-full h-52 flex justify-center items-center text-xl text-neutral-400">
              <LuFilePen className="mx-2 mb-1" size={25} />
              Add Your Lists
            </div>
          </div>
        )}
      </section>

      <footer className="w-full mb-20 text-center">
        <h2>Made with ❤️ for everyone who stops by</h2>
      </footer>
    </>
  );
};

export default Home;
