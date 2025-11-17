"use client";

import ListCard from "@/components/ui/ListCard";

import { useTodo } from "@/store/todoStore";
import { useState } from "react";
import { LuPlus, LuFileWarning, LuFolder } from "react-icons/lu";

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

  return (
    <section className="p-2">
      <div>
        <div className="w-full flex my-8 px-1">
          <input
            type="text"
            placeholder="type here"
            className="w-10/12 bg-neutral-100 dark:bg-neutral-900 focus:outline-0 border-2 rounded-l-2xl p-2"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            onClick={() => handleAdd()}
            className="w-2/12 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 cursor-pointer flex justify-center items-center rounded-r-2xl"
          >
            <LuPlus size={25} />
          </button>
        </div>
      </div>
      <div className="w-full my-8 flex justify-center items-center select-none">
        <div className="flex bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 px-4 py-1 rounded-2xl">
          <LuFolder size={22} />
          <h3 className="mx-1 text-xl font-semibold">Lists</h3>
        </div>
      </div>

      <div className="flex flex-col gap-y-6 mx-6">
        {lists.length === 0 ? (
          <div className="w-full h-52 flex justify-center items-center text-xl text-neutral-400">
            <LuFileWarning className="mx-2" size={25} />
            empty
          </div>
        ) : (
          lists.map((list) => (
            <ListCard
              key={list.id}
              {...list}
              link={`/tasks/${list.id}`}
              editedAt={
                list.editedAt
                  ? new Date(list.editedAt).toLocaleDateString()
                  : "N/A"
              }
              listLength={list.todos.length}
              doneCount={list.todos.filter((item) => item.done).length}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Tasks;
