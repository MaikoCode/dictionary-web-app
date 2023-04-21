import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function FontToggle() {

  const {toggleFont} = useContext(ThemeContext)
  const handleFontChange = (event) => {
    toggleFont(event.target.value);
  };
  return (
    <>
       <form id="font">
        <select className=" custom-select text-black dark:text-white-4 border-none outline-none font-bold bg-transparent pr-6 mr-4" onChange={handleFontChange}>
          <option className='text-white-4 bg-violet' value="Lora, serif">Serif</option>
          <option className='text-white-4 bg-violet' value="Inter, sans-serif">Sans Serif</option>
          <option className='text-white-4 bg-violet' value="Inconsolata, monospace">Mono</option>
        </select>
      </form>

    </>
  )
}
