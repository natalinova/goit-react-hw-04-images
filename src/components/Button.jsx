import React from 'react'

export default function Button({onClick})  {
  
 const handleLoad = () => {
  onClick()
}

   
    return (
        <button className='Button' onClick={handleLoad}>Load more images</button>
    )
 
}
