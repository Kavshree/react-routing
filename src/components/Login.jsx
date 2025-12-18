import { useContext, useState } from "react"
import { userAuth } from "./auth";

export function Login() {
    const authContext = useContext(userAuth);
    const [tempUser, setTempUSer] = useState('');
    function setUser(v) {
        setTempUSer(v);
    }
    function login() {
        authContext.setUser(tempUser);
    }
    return (
        <>
          username <input type="text" value={tempUser} onChange={(e) => setUser(e.target.value)}/>
          <button onClick={() => login()}>Login</button>
        </>
    )
}