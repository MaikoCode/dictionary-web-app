import React from 'react'
import SearchIcon from ".././assets/images/icon-search.svg"

export default function SearchInput() {
  return (
    <>
        <form>
          <div className='flex justify-between aligns-center sm:w-1/2 bg-white-2 dark:bg-black-2  rounded-[16px] px-2.5 py-3 focus-within:outline outline-offset-0 outline-violet'>
                <input type="text" placeholder='Search for any word…' className='outline-none h-full w-full  bg-transparent font-Sanserif
                 text-black-3 dark:text-white-4 font-bold placeholder:text-black-3 dark:placeholder:text-white-4 placeholder:font-bold placeholder:mix-blend-norml placeholder:opacity-25' />
                <img src={SearchIcon} alt="search icon" className='cursor-pointer' />
          </div>
          <p className='hidden'>Whoops, can’t be empty…</p>
        </form>
    </>
  )
}
