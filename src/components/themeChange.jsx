import { useImperativeHandle, useState } from "react";

export function ThemeChanger({ref}) {
    const [theme, setTheme] = useState('dark');

    function updateTheme() {
        useDebugValue(theme)
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    useImperativeHandle(ref, () => ({
        getTheme() {
            return theme;
        }
    }))
    

    return (
        <button onClick={() => updateTheme()}>change</button>
    )
}