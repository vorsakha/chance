import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface IndexTypes {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}
interface DataTypes {
  contextData:
    | {
        clubs: any[];
        odds: any[];
      }[]
    | null;
  setData: Dispatch<SetStateAction<any>>;
}

const IndexContext = createContext<IndexTypes>({} as IndexTypes);
const DataContext = createContext<DataTypes>({} as DataTypes);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [contextData, setData] = useState(null);

  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      <DataContext.Provider value={{ contextData, setData }}>
        {children}
      </DataContext.Provider>
    </IndexContext.Provider>
  );
}

export function useIndex() {
  return useContext(IndexContext);
}

export function useData() {
  return useContext(DataContext);
}
