import React from 'react'
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  
  const element = document.documentElement;
  
  React.useEffect(() => {
    if (theme === "dark") {
     element.classList.add("dark");
     localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    }, [theme]);

  return (
    <div className={'relative dark-mode container ${theme === "dark" ? "dark" : ""}'}>
        <img src={LightButton}
         alt="" 
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 top-0 dark-mode-button ${theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}/>

         <img src={DarkButton}
         alt="" 
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
         className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 dark-mode-button ${theme === "dark" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}/>
    </div>
  );
};

export default DarkMode;