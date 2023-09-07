import React from 'react'

const HeadShot = ({ src, alt }) => {
  return (
    <div >
      
      <img
      src={src}
      alt={alt}
      className="relative mx-10 w-36 h-30 overflow-hidden rounded-lg"
      
    />


    </div>
  )
}

export default HeadShot