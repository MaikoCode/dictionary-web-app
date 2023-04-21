import { useState, useRef } from "react"
import SearchInput from "./Components/SearchInput"
import ToggleButton from "./Components/ToggleButton"
import FontToggle from "./Components/FontToggle"

import { ThemeContext } from "./context/ThemeContext"
import { useContext } from "react"

import LogoIcon from "./assets/images/logo.svg"


function App() {
 
  const {font} = useContext(ThemeContext)
  console.log(font)

  


  return (
    <div className="dark:bg-black-1 dark:text-white-4 h-screen p-4 overflow-hidden">

      <header className="flex justify-between items-center mb-8">
        <img src={LogoIcon} alt="logo icon" />
        <div className="flex">
          <FontToggle />
          <ToggleButton />
        </div>
      </header>
      <SearchInput />
    </div>
  )
}

export default App
