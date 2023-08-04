import React, { useState } from 'react'

const PlayButton = ({children,onPlay,onPause}) => {

  const [play,setPlay]=useState(false);

 function handleClick(e)
 {
    e.stopPropagation();
    if(play)
    {
        onPause();
    }
    else{
        onPlay();
    }
  setPlay(!play)
 }
  return (

      <button style={{borderRadius:'10px'}} onClick={handleClick}>{children}: {play?'>':'||'}</button>  
      )

}

export default PlayButton
