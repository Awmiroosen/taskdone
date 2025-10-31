import { ThemeProvider } from "next-themes";
const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute={"class"} disableTransitionOnChange enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
