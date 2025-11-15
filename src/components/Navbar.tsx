import ThemeSwitch from "./ui/ThemeSwitch";
import { LuHouse, LuNotebookText } from "react-icons/lu";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 py-2 w-full h-14 flex justify-center items-center dark:text-neutral-300 text-neutral-800">
      <div className="w-50 h-10 flex bg-neutral-300 dark:bg-neutral-800 rounded-full">
        <div className="navItem">
          <Link
            className="navLink hover:bg-neutral-400 dark:hover:bg-neutral-700"
            href="/tasks"
          >
            <LuNotebookText size={23} />
          </Link>
          <span className="itemLabel bg-neutral-400 dark:bg-neutral-700 rounded-2xl">
            Tasks
          </span>
        </div>
        <div className="navItem">
          <Link
            className="navLink hover:bg-neutral-400 dark:hover:bg-neutral-700"
            href="/"
          >
            <LuHouse size={23} />
          </Link>
          <span className="itemLabel bg-neutral-400 dark:bg-neutral-700 rounded-2xl">
            Home
          </span>
        </div>
        <div className="navItem">
          <span className="navLink flex hover:bg-neutral-400 dark:hover:bg-neutral-700">
            <ThemeSwitch />
          </span>
          <span className="itemLabel bg-neutral-400 dark:bg-neutral-700 rounded-2xl">
            Theme
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
