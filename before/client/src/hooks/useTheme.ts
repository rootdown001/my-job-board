import { Context } from "@/contexts/ThemeProvider";
import { useContext } from "react";

// 1. create function to useContext
export default function useTheme() {
  // 2. define useContext of our "Context" theme (from ThemeProvider)
  const theme = useContext(Context);

  //   check if null and throw error
  if (theme == null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  //   returning theme if not null
  return theme;
}
