import React from 'react'
import Image from '../Media/Image'
import images from '../../constants/images'

const Footer = () => {
  return (
    <div className="flex flex-row justify-around items-center h-20 mb-5 border-t-2 border-gray ">
      <div className="w-10 h-10">
        <Image src={images.logo} />
      </div>
      <div >
        <p className="text-sm sm:text-base lg:text-lg text-gray-500 justify-center">© All rights reserved 2023. Martin Ruthaivilavan</p>
      </div>
    </div>
  )
}

export default Footer