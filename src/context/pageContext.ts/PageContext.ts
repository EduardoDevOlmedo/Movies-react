import { createContext } from "react"

interface contextProps{
    page: Number;
    addOnePage: () => void;
    previousPage: () => void;
}

export const PageContext = createContext({} as contextProps)