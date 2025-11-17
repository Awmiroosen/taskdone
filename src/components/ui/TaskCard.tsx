import { Todo } from "@/types/Todos";

import { useTodo } from "@/store/todoStore";

import {
  LuCalendarCheck2,
  LuCalendarClock,
  LuClipboardList,
  LuTrash,
} from "react-icons/lu";

const TaskCard = ({ title, listTitle, done = false, id, listId }: Todo) => {
  const { doneTodo, deleteTodo } = useTodo();

  return (
    <div
      className={`p-3 flex bg-neutral-100 dark:bg-neutral-900 rounded-2xl ${
        done && "opacity-60"
      }`}
    >
      <div className="w-5/6 mr-1">
        <div
          className={`px-2 py-0.5 rounded-2xl text-[0.6rem] font-light inline-block transition-all duration-200 select-none ${
            done
              ? "bg-green-600 dark:bg-green-700"
              : "bg-orange-400 dark:bg-orange-700"
          }`}
        >
          {done ? (
            <span className="flex justify-center items-center">
              <LuCalendarCheck2 className="mr-1 mb-0.5" /> Done
            </span>
          ) : (
            <span className="flex justify-center items-center">
              <LuCalendarClock className="mr-1 mb-0.5" /> in Progress
            </span>
          )}
        </div>
        <div className="my-2">
          <h5 className="text-xl font-semibold">{title}</h5>
        </div>
        <div className="flex text-[0.7rem] font-light text-neutral-500 dark:text-neutral-400">
          <LuClipboardList />
          <h6 className="mx-1">{listTitle}</h6>
        </div>
      </div>
      <div>
        <div className="h-full ml-1 border-neutral-300 dark:border-neutral-800 flex flex-col justify-between items-end">
          <div className="pr-3">
            <input
              type="checkbox"
              checked={done}
              onChange={() => doneTodo(listId, id)}
              className="cursor-pointer"
              style={{ transform: "scale(1.4)" }}
            />
          </div>
          <div className="px-1">
            <button
              className="bg-neutral-300 dark:bg-neutral-700 p-1.5 rounded-2xl hover:bg-red-600/60 transition-colors duration-100 cursor-pointer"
              onClick={() => deleteTodo(listId, id)}
            >
              <LuTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
