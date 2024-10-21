import { createContext } from "react";
import StoreContextType from "../types/storeContextType";

export const Context = createContext<StoreContextType>({} as StoreContextType);
