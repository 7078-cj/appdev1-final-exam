import React, { createContext, useContext, useEffect, useState, useRef } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState(
        localStorage.getItem("savedTheme") || "light"
    );

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("savedTheme", theme);
    }, [theme]);

    const context ={   
        theme:theme,
        setTheme:setTheme
    }

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
};