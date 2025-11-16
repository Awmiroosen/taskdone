import "@/styles/globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Taskdone",
  description: "done your tasks",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${vazir.className} bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200`}
      >
        <ThemeProvider attribute="class" enableSystem>
          <main className="max-w-sm overflow-hidden mx-auto">{children}</main>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
