import React, {useState, useRef, useEffect} from 'react'

import SearchIcon from ".././assets/images/icon-search.svg"
import WindowIcon from "../assets/images/icon-new-window.svg"

import PlayButton from "./PlayButton"


export default function SearchInput() {
  const [data, setData] = useState()
  const [searchData, setSearchData] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [firstCall, setFirstCall] = useState(true)
  const [notFound , setNotFound] = useState(false)
 
  const inpRef = useRef()

  const handleSearch = (e) =>  {
    e.preventDefault()
    setSearchData(inpRef.current.value)
    setFirstCall(false)
   
  }

  const handleChange = () => {
    setAlertMessage("")
  }

  const searchFetchData = () => {
    if (!searchData.trim()) {
      setAlertMessage("Whoops, can’t be empty…");
      setData(null);
      return;
    }

  
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchData}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Word not found.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setNotFound(false)
      })
      .catch((error) => {
        setNotFound(true)
        setData(null);
      });
  };
  

  useEffect(() => {
    if(!firstCall){
      searchFetchData()
    }
  }, [searchData, firstCall])

  

  console.log(searchData)
  console.log(data)
  
  
  return (
    <>
        <form onSubmit={handleSearch}>
          <div className='flex justify-between aligns-center  bg-white-2 dark:bg-black-2  rounded-[16px] px-2.5 py-3 focus-within:outline outline-offset-0 outline-violet'>
                <input type="text" ref={inpRef} onChange={handleChange} placeholder='Search for any word…'  className='outline-none h-full w-full  bg-transparent font-Sanserif
                 text-black-3 dark:text-white-4 font-bold placeholder:text-black-3 dark:placeholder:text-white-4 placeholder:font-bold placeholder:mix-blend-norml placeholder:opacity-25' />
                <button type='submit'><img src={SearchIcon} alt="search icon" className='cursor-pointer' /></button>
          </div>
          <p className='text-peach pt-4 pb-2'>{alertMessage}</p>
        </form>

        {notFound && 
          <div className="flex flex-col justify-center items-center mt-4">
            <p className='text-center text-7xl'>😅</p>
            <p className='font-bold dark:text-white-4 pt-8'>No Definitions Found</p>
            <p className='text-white-1 pt-4 text-center'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
          </div>
        }

        {data &&


        <section className=''>

          <div className='flex justify-between items-center mt-6'>
            <p className='flex flex-col justify-between mb-2'>
              <span className='font-bold text-6xl pb-2'>{data[0].word}</span>
              <span className='text-violet text-xl pb-2'>{data[0].phonetic}</span>
            </p>
          
            {
              data[0].phonetics.length > 0 &&
              <PlayButton src={data[0].phonetics}/>
            }
           
          </div>

          <div className='flex justify-between items-center'>
            <span className='pr-2 pb-4'>noun</span><div className='w-full h-[1px] bg-white-1 dark:bg-white-4'></div>
          </div>
          <div>
            <span className='text-white-1 inline-block pb-4'>Meaning</span>
            
             
            <ul className='pb-4'>
              {
                data[0].meanings[0].definitions.slice(0,3).map(item => {
                return <li className='flex pt-2 before:content-["\2022"] before:text-violet before:font-bold before:block before:w-4 before:mr-2'>{item.definition}</li>
                })
              }
            </ul>
            
            {data[0].meanings[0].synonyms.length > 0 &&
             <div className='text-white-1 flex flex-wrap pb-4'>
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
              <span className='pr-2 pb-4'>verb</span><div className='w-full h-[1px] bg-white-1 dark:bg-white-4'></div>
            </div>
            <span className='text-white-1 pb-4'>Meaning</span>
            <ul className='pb-4'>
              {
                data[0].meanings[1].definitions.slice(0,2).map(item => {
                return (
                 <>
                  <li className='flex py-2 before:content-["\2022"] before:text-violet before:font-bold before:xblock before:w-4 before:mr-2'>
                      {item.definition}
                  </li>
                  {item.example && <q className='text-white-1'>{item.example}</q>}
                </>
                )
                })
                
              }
            </ul>
            </>
            }
          </div>
          <div className='w-full h-[1px] bg-white-1 dark:bg-white-4'></div>
          <div className='sm:flex'><span className='text-white-1 underline sm:pr-4'>Source</span> <p className='break-words text-black-3 dark:text-white-4'>{data[0].sourceUrls} <a href={data[0].sourceUrls} target='_blank'><img src={WindowIcon} alt="open link icon" className='inline-block'/></a></p></div>
        </section> 
        
        
        }
    </>
  )
}
