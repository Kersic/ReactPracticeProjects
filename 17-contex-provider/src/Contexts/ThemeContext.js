import React, { createContext, useState } from "react";
import useToggleState from "../Hooks/useToggleState";

//context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, toggleTheme] = useToggleState(true);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
