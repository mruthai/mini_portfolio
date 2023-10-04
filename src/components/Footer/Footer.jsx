import React from 'react';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const emailAddress = 'mmvilavan@gmail.com';

  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, '_blank');
  };
  
  return (
    <div className="md:h-72  bottom-0 bg-black shrink-0">
      <div className="flex md:flex-row flex-col justify-center md:mx-0 mx-5 md:gap-20 gap-0 ">
        <div className="md:my-20 my-5 md:mx-5">
          <h2 className="font-serif text-white font-base text-2xl ">Seeking Opportunities to Collaborate</h2>
        </div>

        <div className="flex flex-col  gap-5 md:my-20 my-5">
          <h3 className="text-white font-bold">Follow me</h3>
          <a className="text-white flex flex-row gap-3 text-sm" href="https://www.linkedin.com/in/martin-ruthaivilavan/" target="_blank" rel="noopener noreferrer"> <BsLinkedin color={'white'} size={20} /> LinkedIn</a>
          <a className="text-white flex flex-row gap-3 text-sm"  href="https://www.linkedin.com/in/martin-ruthaivilavan/" target="_blank" rel="noopener noreferrer"> <FaXTwitter color={'white'} size={20} />X formerly Twitter</a>
        </div>
        <div className="flex flex-col  gap-5 md:my-20 my-5">
          <h3 className="text-white font-bold">Repositories</h3>
          <a className="text-white flex flex-row gap-3 text-sm" href="https://github.com/mruthai/mini_portfolio" target="_blank" rel="noopener noreferrer"> <BsGithub color={'white'} size={20} /> Site's code!</a>

        </div>
        <div className="flex flex-col  gap-5 md:my-20 my-5">
          <h3 className="text-white font-bold">Contact</h3>
          <a className="text-white flex flex-row gap-3 text-sm" href={`mailto:${emailAddress}`} onClick={handleClick} target="_blank" rel="noopener noreferrer"> <BsFillEnvelopeFill color={'white'} size={20} /> Get in touch </a>

        </div>
      </div>
      <div className="flex justify-center">

      </div>
    </div>
  )
}

export default Footer