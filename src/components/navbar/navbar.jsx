"use client";

import { usePathname } from "next/navigation";
import { BiHomeAlt2, BiPlus, BiBookAlt, BiSun, BiMoon } from "react-icons/bi";
import NavItem from "./navItem";
import { useTheme } from "next-themes";

const navbarItems = [
  {
    id: 1,
    name: "home",
    icon: <BiHomeAlt2 size={20} />,
    link: "/",
  },
  {
    id: 2,
    name: "Add",
    icon: <BiPlus size={20} />,
    link: "/add",
  },
  {
    id: 3,
    name: "Tasks",
    icon: <BiBookAlt size={20} />,
    link: "/tasks",
  },
];
const Navbar = () => {
  const active = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <nav className="w-sm max-w-sm h-12 fixed bottom-0 py-1 px-2 dark:text-zinc-100 text-zinc-800">
      <div className="h-full px-2 mx-4 bg-zinc-300 dark:bg-zinc-800 rounded-2xl grid grid-cols-4 gap-x-10 items-center">
        {navbarItems.map((item) => (
          <NavItem key={item.id} active={active} {...item} />
        ))}
        <button
          className="cursor-pointer py-1 px-2 rounded-2xl flex justify-center dark:hover:bg-zinc-700 hover:bg-zinc-400"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
