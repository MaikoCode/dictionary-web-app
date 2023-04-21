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
    <div className=" dark:bg-black-1 text-lg dark:text-white-4 min-h-screen p-4 overflow-hidden">
      <div className="md:w-[756px] mx-auto">
        <header className="flex justify-between items-center mb-8">
          <img src={LogoIcon} alt="logo icon" />
          <div className="flex">
            <FontToggle />
            <div className='w-[1px] bg-white-2'></div>
            <ToggleButton />
          </div>
        </header>
        <SearchInput />
      </div>
    </div>
  )
}

export default App
