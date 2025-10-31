import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute={"class"} enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
