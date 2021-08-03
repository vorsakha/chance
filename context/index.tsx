import { createContext, useContext, useState, ReactNode } from "react";

const IndexContext = createContext<any>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);

  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      {children}
    </IndexContext.Provider>
  );
}

export function useIndex() {
  return useContext(IndexContext);
}
