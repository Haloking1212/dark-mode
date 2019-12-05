import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

function useDarkMode(key, initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if(darkMode === true) {
            return document.body.classList.add("dark-mode")
        } else {
            return document.body.classList.remove("dark-mode")
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return [darkMode, toggleDarkMode]
}

export default useDarkMode;