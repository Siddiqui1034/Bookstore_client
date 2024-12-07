import React, { useState } from 'react'
import './StarRating.css'

const StarRating = ({star}) => {
  const [starClicked, setStarClicked] = useState(0)
  const [hoverClicked, setHoverClicked] = useState(0)
  const handleStarRating = (index) => {
    setStarClicked(index+1)
    console.log(starClicked)
  }
  return (
    <div className='starContainer'>
      {
      new Array(star).fill(0).map((_,index)=>{
        return <div className={`star ${index < starClicked || index < hoverClicked ? "gold": ""}`} key={`star_${index+1}`} 
        onClick={()=>handleStarRating(index)}
        onMouseOver={()=>setHoverClicked(index+1)}
        onMouseLeave={()=>setHoverClicked(0)}
        >&#9733;</div>
      })
      }
    </div>
  )
}

export default StarRating
