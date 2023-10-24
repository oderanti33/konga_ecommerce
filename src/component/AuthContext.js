import { createContext } from "react";

export const AuthContext = createContext({
    isLogin: false, login: () => { }, logout: () => { }, userId: null,
    token: null, firstName: null, lastName: null, email: null
})