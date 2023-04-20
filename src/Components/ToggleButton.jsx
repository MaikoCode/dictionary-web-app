import { useState } from 'react';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ToggleButton() {
  // const [isToggle, setIsToggle] = useState(false);
  const {toggleTheme, theme} = useContext(ThemeContext)

  // const toggle = () => {
  //   setIsToggle(!isToggle);
  //   toggleTheme();
  // }

  return (
    <>
     <button onClick={toggleTheme} className='flex'>
        <span className={`bg-black-1 w-11 h-7 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1  ${theme ? 'bg-violet' : ''} ${theme ? 'after:translate-x-4 ease-in-out duration-300' : ''} after:duration-300 mr-4`}></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className={`${theme ? "active-toggle" : ""}`}><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
     </button>
    </>
  );
}
