import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [font, setFont] = useState("Serif");
    

    const toggleFont = (fontFamily) => {
        setFont(fontFamily)
    }

    const toggleTheme = () =>{
        setTheme(!theme)
    }

    
    document.body.style.fontFamily = font;
    
    if(theme){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark'); 
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme, font, toggleFont}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;