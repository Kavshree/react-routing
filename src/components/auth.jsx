import { useState, createContext } from "react";

export const userAuth = createContext(null);

export function CustomAuth({ children }) {
    const [user, setUser] = useState(null);
    return (
        <userAuth.Provider value={ {user, setUser} }>
            {children}
        </userAuth.Provider>
    )
}