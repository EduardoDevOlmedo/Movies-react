import { createContext } from "react";

interface AuthContextProps {
    token: string;
    login: (email: string, password: string) => void;
    logout: () => void;
    error?: string;
}





export const AuthContext = createContext({} as AuthContextProps)