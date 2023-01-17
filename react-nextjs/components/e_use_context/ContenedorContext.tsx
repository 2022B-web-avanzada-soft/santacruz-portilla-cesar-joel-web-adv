import {createContext, Dispatch, SetStateAction} from "react";

export const ContenedorContext = createContext({} as ContenedorContextObject)
export interface ContenedorContextObject {
    userName: string,
    setUserName: Dispatch<SetStateAction<string>>
}