import { createContext } from "react";
import { useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [theme, setTheme] = useState("dark")
  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
