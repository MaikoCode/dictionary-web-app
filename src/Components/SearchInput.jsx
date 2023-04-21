import React, {useState, useRef, useEffect} from 'react'

import SearchIcon from ".././assets/images/icon-search.svg"
import WindowIcon from "../assets/images/icon-new-window.svg"

import PlayButton from "./PlayButton"


export default function SearchInput() {
  const [data, setData] = useState()
  const [searchData, setSearchData] = useState("")
 
  const inpRef = useRef()

  const handleSearch = (e) =>  {
    e.preventDefault()
    setSearchData(inpRef.current.value)
  }

  const searchFetchData = () => {
    // Have to handle the different errors
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchData}`).
    then((response) =>{return response.json()}).then(data => setData(data))
   
  }

  useEffect(() => {
    searchFetchData()
  }, [searchData])

  

  console.log(searchData)
  console.log(data)
  // // if(!firstCall){
  //   console.log(data[0].meanings[0].definitions)
  // // }
 
  
  return (
    <>
        <form onSubmit={handleSearch}>
          <div className='flex justify-between aligns-center sm:w-1/2 bg-white-2 dark:bg-black-2  rounded-[16px] px-2.5 py-3 focus-within:outline outline-offset-0 outline-violet'>
                <input type="text" ref={inpRef} placeholder='Search for any word…'  className='outline-none h-full w-full  bg-transparent font-Sanserif
                 text-black-3 dark:text-white-4 font-bold placeholder:text-black-3 dark:placeholder:text-white-4 placeholder:font-bold placeholder:mix-blend-norml placeholder:opacity-25' />
                <button type='submit'><img src={SearchIcon} alt="search icon" className='cursor-pointer' /></button>
          </div>
          <p className='hidden'>Whoops, can’t be empty…</p>
        </form>

        {data && 


        <section className=''>

          <div className='flex justify-between items-center mt-6'>
            <p className='flex flex-col justify-between'>
              <span>{data[0].word}</span>
              <span className='text-violet'>{data[0].phonetic}</span>
            </p>
            {
              data[0].phonetics.length > 0 &&
              <PlayButton src={data[0].phonetics}/>
            }
           
          </div>

          <div className='flex justify-between items-center'>
            <span className='pr-2'>noun</span><div className='w-full h-[1px] bg-white-1 dark:bg-white-4'></div>
          </div>
          <div>
            <span className='text-white-1'>Meaning</span>
            
             
            <ul>
              {
                data[0].meanings[0].definitions.slice(0,3).map(item => {
                return <li>{item.definition}</li>
                })
              }
            </ul>
            
            {data[0].meanings[0].synonyms.length > 0 &&
             <div className='text-white-1'>
             <span className='pr-6'>Synonyms</span>
              <p>
                {data[0].meanings[0].synonyms.slice(0,5).map(item => {
                    return <span className='text-violet pr-2'>{item}</span>
                })}
                </p>
             </div>}
          </div>
         
          <div>
            
            {
            data[0].meanings.length > 1 &&
            <>
            <div className='flex justify-between items-center'>
              <span className='pr-2'>verb</span><div className='w-full h-[1px] bg-white-1 dark:bg-white-4'></div>
            </div>
            <span className='text-white-1'>Meaning</span>
            <ul>
              {
                data[0].meanings[1].definitions.slice(0,2).map(item => {
                return <li>
                  <p>{item.definition}</p>
                  <q>{item.example}</q>
                </li>
                })
                
              }
            </ul>
            </>
            }
          </div>
          <div className='w-full h-[1px] bg-white-4'></div>
          <div><span className='text-white-1 underline'>Source</span> <p className='break-words text-black-3 dark:text-white-4'>{data[0].sourceUrls} <a href={data[0].sourceUrls} target='_blank'><img src={WindowIcon} alt="open link icon" className='inline-block'/></a></p></div>
        </section>
        
        }
    </>
  )
}
