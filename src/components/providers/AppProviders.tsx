"use client";
import { ThemeProvider } from "next-themes";

import type { Children } from "@/types/Children";

const AppProviders = ({ children }: Children) => {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
};

export default AppProviders;
