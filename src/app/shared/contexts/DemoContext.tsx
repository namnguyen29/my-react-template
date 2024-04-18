import { ReactNode, createContext, useState } from "react";

export type DemoTheme = "light" | "dark";

export type DemoContextProps = {
  theme: DemoTheme;
  setTheme: (theme: "light" | "dark") => void;
};

export const DemoContext = createContext<DemoContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const DemoContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <DemoContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};
