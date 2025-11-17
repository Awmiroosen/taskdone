"use client";

import { useTodo } from "@/store/todoStore";
import Link from "next/link";
import { LuChevronRight, LuClipboardList, LuPin } from "react-icons/lu";

const Home = () => {
  const { pinLists } = useTodo();

  const btnStyle =
    "flex justify-center items-center px-3 py-0.5 rounded-2xl text-[0.9rem] font-light select-none";

  const PinLength = pinLists.map((pin) => pin).length;
  return (
    <>
      <header className="w-full h-12 my-4 flex justify-center items-center">
        <h1 className="text-3xl font-bold">Taskdone</h1>
      </header>
      <section>
        <div className="rounded-2xl p-4 flex flex-col bg-neutral-100 dark:bg-neutral-900 transition-opacity duration-500">
          <div className="w-full flex justify-between my-4">
            <h5 className="font-semibold text-xl py-1 ">Pin Lists</h5>
            <LuPin size={20} />
          </div>
          <div className="w-full flex justify-end my-1">
            <span className={`${btnStyle} bg-neutral-300 dark:bg-neutral-700`}>
              <LuClipboardList className="mr-1 mb-0.5" /> {PinLength}
            </span>
          </div>
          <div className="mt-2 pt-4 border-t border-neutral-300 dark:border-neutral-800 flex">
            <div className="w-full flex justify-end text-sm">
              <Link
                href={""}
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:hover:bg-neutral-300 dark:text-neutral-900 transition-colors duration-150 px-3 py-1 rounded-2xl flex items-center"
              >
                Pin Lists
                <button>
                  <LuChevronRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
