import { useContext } from "react";

import { DemoContext } from "@app-shared/contexts";

export const useDemoContext = () => {
  const { theme, setTheme } = useContext(DemoContext);

  const toggleAppTheme = (value: "light" | "dark"): void => {
    setTheme(value);
  };

  return {
    theme,
    toggleAppTheme,
  };
};
