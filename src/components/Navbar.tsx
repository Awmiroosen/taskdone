import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { LuHouse, LuNotebookText, LuGithub } from "react-icons/lu";
import "@/styles/navbar.css";
import Link from "next/link";

const Navbar = () => {
  const navLinkClass =
    "navLink hover:bg-neutral-200 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200";
  const navSpanClass =
    "itemLabel bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800 rounded-full";

  return (
    <nav className="fixed bottom-0 w-full flex justify-center items-center dark:text-neutral-800 text-neutral-300 z-50">
      <div className="w-50 hover:w-54 h-12 mb-3 transition-all duration-400 flex bg-neutral-900 dark:bg-neutral-100 rounded-full">
        <div className="navItem">
          <Link className={navLinkClass} href="/tasks">
            <LuNotebookText size={23} />
          </Link>
          <span className={navSpanClass}>Tasks</span>
        </div>
        <div className="navItem border-r dark:border-neutral-400 border-neutral-700">
          <Link className={navLinkClass} href="/">
            <LuHouse size={23} />
          </Link>
          <span className={navSpanClass}>Home</span>
        </div>
        <div className="navItem">
          <a
            href="https://github.com/awmiroosen"
            target="_blank"
            className={navLinkClass}
          >
            <LuGithub size={23} />
          </a>
          <span className={navSpanClass}>Github</span>
        </div>
        <div className="navItem">
          <span className={`${navLinkClass} flex`}>
            <ThemeSwitch />
          </span>
          <span className={navSpanClass}>Theme</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
