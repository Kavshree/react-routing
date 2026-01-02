import { useRef } from "react";
import { ThemeChanger } from "../components/themeChange.jsx";
import { useEffect } from "react";
import { useDebugValue } from "react";

export default function Profile() {
    const childRef = useRef();
    useEffect(() => {
        
        alert(childRef.current.getTheme())
    },[])

    return (
        <>Profile
        <ThemeChanger ref={childRef}></ThemeChanger>
        </>
    )
}