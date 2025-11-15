"use client";
import { TaskCard } from "@/types/Cards";
import { useTodo } from "@/store/todoStore";

import {
  LuCalendarPlus,
  LuCalendarClock,
  LuNotebook,
  LuNotebookText,
} from "react-icons/lu";

const Card = ({
  id,
  listId,
  title,
  startDate = "_",
  lastUpdate = "_",
  done = false,
  listTitle,
  tasks,
  type,
}: TaskCard) => {
  const { doneList, doneTodo } = useTodo();

  const handleDone = () => {
    if (type === "list") {
      doneList(id);
    } else if (type === "todo" && listId) {
      doneTodo(listId, id);
    }
  };

  const btnClass =
    "bg-neutral-300 dark:bg-neutral-700 px-2 py-0.5 rounded-xl text-xs font-extralight text-neutral-600 dark:text-neutral-300 ";

  return (
    <div
      className={`bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2 text-sm rounded-xl flex flex-col relative ${
        done ? "opacity-40 line-through" : ""
      }`}
    >
      <div className="w-full my-2 pt-2">
        <div
          className={`top-2 right-2 absolute text-neutral-700 dark:text-neutral-100 ${btnClass}`}
        >
          {listTitle ? (
            <span className="flex text-sm">
              <LuNotebook size={15} className="mx-1" /> {listTitle}
            </span>
          ) : (
            <span className="flex text-sm">
              <LuNotebookText size={15} className="mx-1" /> {tasks}
            </span>
          )}
        </div>
        <h5 className="text-lg mt-1">{title}</h5>
      </div>

      <div className="w-full my-2 border-t border-neutral-300 dark:border-neutral-700 flex justify-between text-xs pt-2">
        <div className="flex">
          <span className={`${btnClass} mx-2 flex`}>
            <LuCalendarPlus className="mx-1" />
            added : {startDate}
          </span>
          <span className={`${btnClass} mx-2 flex`}>
            <LuCalendarClock className="mx-1" />
            Last Update : {lastUpdate}
          </span>
        </div>
        <div className="mx-2">
          <input
            type="checkbox"
            className="bg-none"
            checked={done}
            onChange={handleDone}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
