import React from 'react'

const TechIcons = ({src, alt, link}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
     <img
      src={src}
      alt={alt}
      className=""
      
    />

    </a >
  )
}

export default TechIcons