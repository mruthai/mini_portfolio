import React from 'react'

const Image = ({ src, alt, imgClassName }) => {
  return (
    <>
      <img
      src={src}
      alt={alt}
      className={`${imgClassName}`}
    />
    </>
  )
}

export default Image