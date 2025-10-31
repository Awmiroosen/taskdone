"use client";

import { usePathname } from "next/navigation";
import { BiHomeAlt2, BiPlus, BiBookAlt } from "react-icons/bi";
import NavItem from "./navItem";

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
    icon: <BiPlus size={25} />,
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
  return (
    <nav className="w-sm max-w-sm h-12 fixed bottom-0 py-1 px-2">
      <div className="h-full px-10 mx-4 bg-zinc-800 rounded-2xl grid grid-cols-3 gap-x-10 items-center">
        {navbarItems.map((item) => (
          <NavItem key={item.id} active={active} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
