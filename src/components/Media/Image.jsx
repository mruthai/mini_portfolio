import React from 'react'

const Image = ({ src, alt, imgClassName }) => {
  return (
    <div >
      
      <img
      src={src}
      alt={alt}
      className={`${imgClassName}`}
      
    />


    </div>
  )
}

export default Image