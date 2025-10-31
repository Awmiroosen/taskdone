"use client";

import {
  PiBookLight,
  PiGithubLogoLight,
  PiHouseLight,
  PiMoonLight,
  PiPlusLight,
  PiSunDimLight,
} from "react-icons/pi";

import { useContext } from "react";
import { ThemeContext } from "@/providers/context/ThemeProvider";

import Link from "next/link";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const githubLink = "https://github.com/awmiroosen";

  return (
    <nav className=" max-w-sm w-sm h-16 fixed bottom-0 flex justify-center items-center z-50">
      <div className="w-80 h-12 flex items-center transition-all relative rounded-3xl backdrop-blur-md border border-zinc-700">
        <div className="group w-1/5 h-full flex justify-center items-center relative rounded-l-3xl bg-zinc-100/60 dark:bg-zinc-900/60">
          <Link
            href="/"
            className="rounded-3xl p-1.5 transition-all duration-300 ease-in-out cursor-pointer select-none hover:bg-zinc-300 dark:hover:bg-zinc-800 flex justify-center items-center"
            name="Home"
          >
            <PiHouseLight className="dark:text-zinc-100" size={25} />
          </Link>
          <div className="absolute -top-9 w-full h-8 flex justify-center items-center rounded-2xl text-xs bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-zinc-100 invisible group-hover:visible pointer-events-none select-none">
            Home
          </div>
        </div>
        <div className="group w-1/5 h-full flex justify-center items-center relative bg-zinc-100/60 dark:bg-zinc-900/60">
          <Link
            href="/tasks"
            className="rounded-3xl p-1.5 transition-all duration-300 ease-in-out cursor-pointer select-none hover:bg-zinc-300 dark:hover:bg-zinc-800 flex justify-center items-center"
            name="Tasks"
          >
            <PiBookLight className="dark:text-zinc-100" size={25} />
          </Link>
          <div className="absolute -top-9 w-full h-8 flex justify-center items-center rounded-2xl text-xs bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-zinc-100 invisible group-hover:visible pointer-events-none select-none">
            Tasks
          </div>
        </div>
        <div className="group w-1/5 h-full flex justify-center items-center relative bg-zinc-100/60 dark:bg-zinc-900/60">
          <Link
            href="/add"
            className="rounded-3xl p-1.5 transition-all duration-300 ease-in-out cursor-pointer select-none hover:bg-zinc-300 dark:hover:bg-zinc-800 flex justify-center items-center"
            name="Add"
          >
            <PiPlusLight className="dark:text-zinc-100" size={25} />
          </Link>
          <div className="absolute -top-9 w-full h-8 flex justify-center items-center rounded-2xl text-xs bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-zinc-100 invisible group-hover:visible pointer-events-none select-none">
            Add
          </div>
        </div>
        <div className="group w-1/5 h-full flex justify-center items-center relative bg-zinc-100/60 dark:bg-zinc-900/60">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            name="Github"
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="rounded-3xl p-1.5 transition-all duration-300 ease-in-out cursor-pointer select-none hover:bg-indigo-300 dark:hover:bg-indigo-900 flex justify-center items-center">
              <PiGithubLogoLight className="dark:text-zinc-100" size={25} />
            </div>
            <div className="absolute -top-9 w-full h-8 flex justify-center items-center rounded-2xl text-xs bg-indigo-300 dark:bg-indigo-900 dark:text-zinc-100 text-zinc-900 invisible group-hover:visible pointer-events-none select-none right-0">
              Github
            </div>
          </a>
        </div>
        <div className="group w-1/5 h-full flex justify-center items-center relative rounded-r-3xl bg-zinc-100/60 dark:bg-zinc-900/60">
          <button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            name="Color?"
            className="rounded-3xl p-1.5 transition-all duration-300 ease-in-out cursor-pointer select-none hover:bg-zinc-300 dark:hover:bg-zinc-900 flex justify-center items-center"
          >
            {theme === "dark" ? (
              <PiSunDimLight className="dark:text-zinc-100" size={25} />
            ) : (
              <PiMoonLight className="dark:text-zinc-100" size={25} />
            )}
          </button>
          <div className="absolute -top-9 w-full h-8 flex justify-center items-center rounded-2xl text-xs bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-800 text-zinc-100 invisible group-hover:visible pointer-events-none select-none">
            Theme
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
