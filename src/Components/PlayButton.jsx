import { useRef, useState } from "react";

import PlayButtonIcon from ".././assets/images/icon-play.svg";

export default function PlayButton({src}) {
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const audioRef = useRef()
  const play = () => {
    audioRef.current.play().catch((error) => {
      setCurrentSourceIndex(prevIndex => prevIndex + 1)
    })
  }

  return (
    <>
          <audio src={src[currentSourceIndex].audio} ref={audioRef}
            onError={() => {
          setCurrentSourceIndex(prevIndex => prevIndex + 1);
        }}
          />
           <svg onClick={play} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" className="cursor-pointer button-play">
            <g fill="#A445ED" fill-rule="evenodd">
                <circle
                cx="37.5"
                cy="37.5"
                r="37.5"
                fill-opacity="0.25"
                />
                <path d="M29 27v21l21-10.5z" />
            </g>
            </svg>

    </>
  )
}
