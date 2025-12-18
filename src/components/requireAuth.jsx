import { useContext } from "react";
import { userAuth } from "./auth";
import { Login } from "./Login";

export function RequireAuth({ children }) {
    const userContext = useContext(userAuth);
    if(userContext.user) return (
        <>
            {children}
        </>
    )
    return (
        <Login />
    )
}