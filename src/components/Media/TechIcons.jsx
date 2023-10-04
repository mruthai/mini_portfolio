import React from 'react'

const TechIcons = ({src, alt, link}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
     <img
      src={src}
      alt={alt}
      className="md:h-10 md:w-10 h-8 w-8"
      
    />

    </a >
  )
}

export default TechIcons