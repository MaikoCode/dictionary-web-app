import SearchInput from "./Components/SearchInput"
import ToggleButton from "./Components/ToggleButton"
import PlayButton from "./Components/PlayButton"
import FontToggle from "./Components/FontToggle"
import { ThemeContext } from "./context/ThemeContext"
import { useContext } from "react"


function App() {
 
  const {font} = useContext(ThemeContext)
  console.log(font)
  return (
    <div className="dark:bg-black-1 dark:text-white-4 h-screen grid p-4 gap-1">
      <SearchInput />
      <ToggleButton />
      <PlayButton />  
      <FontToggle />
      <h1>Keyboard</h1>
    </div>
  )
}

export default App
