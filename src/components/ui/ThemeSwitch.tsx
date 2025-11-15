"use client";
import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <LuSunMoon size={25} />
    </button>
  );
};

export default ThemeSwitch;
