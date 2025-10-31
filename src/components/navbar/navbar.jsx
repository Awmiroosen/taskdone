"use client";
import "./navbar.css";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import {
  PiHouseLight,
  PiHouseFill,
  PiClipboardTextLight,
  PiClipboardTextFill,
  PiPenNibLight,
  PiPenNibFill,
  PiGithubLogoLight,
  PiPaintBrushBroadLight,
} from "react-icons/pi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const active = usePathname();

  return (
    <nav className="fixed bottom-2 w-sm max-w-sm h-10 rounded-2xl">
      <div className="w-full h-full grid grid-cols-5 gap-x-2 items-center rounded-2xl border dark:text-zinc-200 text-zinc-800 border-zinc-400 bg-zinc-300 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="nav">
          <Link href={"/"} className="nav-item">
            {active === "/" ? (
              <PiHouseFill size={25} />
            ) : (
              <PiHouseLight size={25} />
            )}
          </Link>
          <span className="nav-title text-sm rounded-2xl border border-zinc-400 bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800">
            Home
          </span>
        </div>
        <div className="nav">
          <Link href={"/tasks"} className="nav-item">
            {active === "/tasks" ? (
              <PiClipboardTextFill size={25} />
            ) : (
              <PiClipboardTextLight size={25} />
            )}
          </Link>
          <span className="nav-title text-sm rounded-2xl border border-zinc-400 bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800">
            Tasks
          </span>
        </div>
        <div className="nav">
          <Link href={"/add"} className="nav-item">
            {active === "/add" ? (
              <PiPenNibFill size={25} />
            ) : (
              <PiPenNibLight size={25} />
            )}
          </Link>
          <span className="nav-title text-sm rounded-2xl border border-zinc-400 bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800">
            Add
          </span>
        </div>
        <div className="nav">
          <a
            href="https://github.com/awmiroosen"
            target="_blank"
            className="nav-item"
          >
            <PiGithubLogoLight size={25} />
          </a>
          <span className="nav-title text-sm rounded-2xl border border-zinc-400 bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800">
            Github
          </span>
        </div>
        <div className="nav">
          <button
            className="nav-item cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <PiPaintBrushBroadLight size={25} />
          </button>
          <span className="nav-title text-sm rounded-2xl border border-zinc-400 bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800">
            Theme
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
