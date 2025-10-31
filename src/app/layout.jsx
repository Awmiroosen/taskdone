import Providers from "@/providers/providers";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });
export const metadata = {
  title: "Taskdone",
  description: "task-done helps you done your tasks!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vazir.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
