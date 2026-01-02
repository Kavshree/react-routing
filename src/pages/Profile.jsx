import { useRef } from "react";
import { ThemeChanger } from "../components/themeChange.jsx";
import { useEffect } from "react";
import { useDebugValue } from "react";
import { Optimistic } from "../components/optimistic.jsx";

export default function Profile() {
    const childRef = useRef();
    useEffect(() => {
        
        alert(childRef.current.getTheme())
    },[])

    return (
        <>Profile
        <ThemeChanger ref={childRef}></ThemeChanger>
        <Optimistic />
        </>
    )
}