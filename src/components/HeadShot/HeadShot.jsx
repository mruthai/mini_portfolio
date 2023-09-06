import React from 'react'

const HeadShot = ({ src, alt, width, height }) => {
  return (
    <div className="">
      
      <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-full"
    />


    </div>
  )
}

export default HeadShot