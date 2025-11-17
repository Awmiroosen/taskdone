"use client";

import { ListCardType } from "@/types/ListCardType";
import { useTodo } from "@/store/todoStore";
import {
  LuCalendarClock,
  LuCalendarCheck2,
  LuClock,
  LuClipboardList,
  LuClipboardCheck,
  LuTrash,
  LuChevronRight,
} from "react-icons/lu";

import { TiStarOutline, TiStar } from "react-icons/ti";
import Link from "next/link";

const ListCard = ({
  id,
  title,
  done = false,
  editedAt,
  listLength,
  link = "",
  doneCount = 0,
}: ListCardType) => {
  const { deleteList, addPinList, deletePinList, pinLists } = useTodo();

  const isPin = pinLists.some((item) => item.id === id);
  const handlePin = (id: string) => {
    const isItPin = pinLists.some((item) => item.id === id);
    if (!done) {
      if (!isItPin) {
        addPinList(id);
      } else {
        deletePinList(id);
      }
    }
  };

  const btnStyle =
    "flex justify-center mx-1 items-center px-3 py-0.5 rounded-2xl text-[0.8rem] font-light select-none";

  return (
    <div
      className={`rounded-2xl p-4 flex flex-col bg-neutral-100 dark:bg-neutral-900 transition-opacity duration-500 ${
        done && "opacity-60"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <div
          className={`px-2 py-0.5 rounded-2xl text-[0.8rem] font-light inline-block transition-all duration-200 select-none ${
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
        <div>
          <button onClick={() => handlePin(id)}>
            {isPin ? <TiStar size={20} /> : <TiStarOutline size={20} />}
          </button>
        </div>
      </div>
      <div className="w-full my-1">
        <h5 className="font-semibold text-xl py-1 ">{title}</h5>
      </div>
      <div className="w-full flex my-1">
        <div className="w-1/2 flex justify-start">
          <span className={`${btnStyle} bg-neutral-300 dark:bg-neutral-700`}>
            <LuClock className="mr-1 mb-0.5" />
            {editedAt}
          </span>
        </div>
        <div className="w-1/2 flex justify-end">
          <span className={`${btnStyle} bg-neutral-300 dark:bg-neutral-700`}>
            <LuClipboardList className="mr-1 mb-0.5" /> {listLength}
          </span>
          <span className={`${btnStyle} bg-green-400/50 dark:bg-green-800/50`}>
            <LuClipboardCheck className="mr-1 mb-0.5" /> {doneCount}
          </span>
        </div>
      </div>
      <div className="mt-2 pt-4 border-t border-neutral-300 dark:border-neutral-800 flex">
        <div className="w-1/2 flex">
          <div className="mx-3">
            <button
              className="hover:text-red-600 cursor-pointer"
              onClick={() => deleteList(id)}
            >
              <LuTrash />
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end text-sm">
          <Link
            href={link}
            className="bg-neutral-900 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-900 px-3 rounded-2xl flex items-center"
          >
            Tasks
            <button>
              <LuChevronRight size={15} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
