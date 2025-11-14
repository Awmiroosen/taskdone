import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

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
        className={`${vazir.className} bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200`}
      >
        <main className="max-w-3xl max-sm:max-w-sm mx-auto">{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
