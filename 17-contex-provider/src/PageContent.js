import React, { useContext } from "react";
//context
import { ThemeContext } from "./Contexts/ThemeContext";

function PageContent({ children }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDark ? "black" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{children}</div>;
}

export default PageContent;
