import { createContext } from "react";

interface AuthContextProps {
    token: string;
    login: (email: string, password: string) => void
}





export const AuthContext = createContext({} as AuthContextProps)