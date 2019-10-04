import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, intialValue) => {
  const [isDarkMode, setDarkMode] = useLocalStorage(key, intialValue);

  useEffect(() => {
    isDarkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")

  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return [isDarkMode, toggleDarkMode]
};

export default useDarkMode;
