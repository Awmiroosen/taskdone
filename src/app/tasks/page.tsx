"use client";

import Button from "@/components/ui/button";
import ListCard from "@/components/ui/ListCard";

import { useTodo } from "@/store/todoStore";
import { useState } from "react";
import { LuFilePen, LuFolder, LuCalendarCheck2 } from "react-icons/lu";

const Tasks = () => {
  const { lists, addList } = useTodo();

  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    const listTitle = inputValue.trim();
    if (listTitle) {
      addList(listTitle);
    }
    setInputValue("");
  };

  const isAllListsDone =
    lists.map((item) => item.done).length ===
    lists.filter((item) => item.done).length;

  const doneLists = lists.filter((list) => list.done === true).length;

  return (
    <section className="p-2 mb-18">
      <div>
        <form
          className="w-full flex my-8 px-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <input
            type="text"
            placeholder="add your new List"
            className="w-full bg-neutral-300 dark:bg-neutral-800 focus:outline-0 border rounded-xl p-2"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </form>
      </div>

      <div className="w-full my-8 flex justify-center items-center select-none">
        <div className="flex bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900 px-4 py-1 rounded-2xl">
          {!isAllListsDone ? (
            <LuFolder size={22} />
          ) : (
            <LuCalendarCheck2 size={22} />
          )}
          {}
          <h3 className="mx-1 text-xl font-semibold">Lists</h3>
        </div>
      </div>
      <div className="w-full my-8 grid grid-cols-2 place-items-center">
        <Button>
          <LuFolder className="mr-1 mb-0.5" /> total: {lists.length}
        </Button>

        <Button>
          <LuCalendarCheck2 className="mr-1 mb-0.5" /> done: {doneLists}
        </Button>
      </div>
      <div className="flex flex-col gap-y-6 mx-6">
        {lists.length === 0 ? (
          <div className="w-full h-52 flex justify-center items-center text-xl text-neutral-400">
            <LuFilePen className="mx-2 mb-1" size={25} />
            Add Your Lists and Tasks
          </div>
        ) : (
          lists.map((list) => (
            <ListCard
              key={list.id}
              {...list}
              link={`/tasks/${list.id}`}
              editedAt={
                list.editedAt
                  ? new Date(list.editedAt).toLocaleTimeString()
                  : "N/A"
              }
              listLength={list.todos.length}
              doneCount={list.todos.filter((item) => item.done).length}
              trash={true}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Tasks;
