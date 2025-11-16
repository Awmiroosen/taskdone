import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { LuHouse, LuNotebookText } from "react-icons/lu";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  const navLinkClass =
    "navLink hover:bg-neutral-300 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-300";
  const navSpanClass =
    "itemLabel bg-neutral-800 text-neutral-300 dark:bg-neutral-300 dark:text-neutral-800 rounded-full";

  return (
    <nav className="fixed bottom-0 w-full flex justify-center items-center dark:text-neutral-800 text-neutral-300 z-50">
      <div className="w-50 hover:w-54 h-12 mb-3 transition-all duration-400 flex bg-neutral-800 dark:bg-neutral-300 rounded-full">
        <div className="navItem">
          <Link className={navLinkClass} href="/tasks">
            <LuNotebookText size={23} />
          </Link>
          <span className={navSpanClass}>Tasks</span>
        </div>
        <div className="navItem">
          <Link className={navLinkClass} href="/">
            <LuHouse size={23} />
          </Link>
          <span className={navSpanClass}>Home</span>
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
