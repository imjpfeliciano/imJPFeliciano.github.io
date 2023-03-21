import React, { useEffect } from "react";

export const themes = {
  dark: "dark-content",
  light: "light-content",
};

export const ThemeContext = React.createContext({
  activeTheme: themes.dark,
  changeTheme: () => {},
});

export const CustomThemeProvider = ({ children }: { children: any }) => {
  const [activeTheme, setTheme] = React.useState(themes.dark);

  const changeTheme = () => {
    setTheme(activeTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
