"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  function handleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        handleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside the DarkModeProvider");
  return context;
}
export { DarkModeProvider, useDarkMode };
