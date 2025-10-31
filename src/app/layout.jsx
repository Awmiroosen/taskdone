import Providers from "@/providers/providers";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });
export const metadata = {
  title: "Taskdone",
  description: "task-done helps you done your tasks!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${vazir.className} bg-zinc-50 dark:bg-zinc-950`}>
        <Providers>
          <main className="max-w-sm min-h-screen overflow-y-hidden mx-auto relative">
            {children}
            <Navbar />
          </main>
        </Providers>
      </body>
    </html>
  );
}
