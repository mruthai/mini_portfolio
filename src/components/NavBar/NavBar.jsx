import React, { useState } from 'react';
import Image from '../../components/Media/Image'
import images from '../../constants/images'
import { BiMenu, BiX } from 'react-icons/bi'



const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`sticky top-0 py-5 p-5 ${menuOpen ? 'bg-white' : 'bg-white'}`}>
      <div className="flex md:flex-row flex-col md:items-center">
        <div className="flex md:flex-row md:w-2/5 md:gap-2 gap-1 md:px-32 items-center">
          <Image
            src={images.logo}
            alt="logo"
            imgClassName="md:w-15 w-7"
          />
          <h1 className="font-bold md:text-2xl text-xl">Martin Ruthaivilavan</h1>
        </div>
        <div className="md:hidden absolute top-0 right-0 m-4 p-2">
          <button className="flex md:flex-row flex-col text-#0a0a0a hover:text-blue-700" onClick={toggleMenu}>
            {menuOpen ? <button><BiX size={24} /> </button> : <button><BiMenu size={24} />
            </button>}
          </button>
        </div>
        <div
          className={`${menuOpen
              ? 'flex md:flex-row flex-col justify-center items-center' 
              : 'hidden'
            } md:flex flex-row justify-center justfiy-content md:space-y-0 md:space-x-4 mt-1 md:mt-0 border-radius rounded-md`}>
          <a className="text-#0a0a0a hover:text-blue-700" href="/" alt="home">Home</a>
          <a className="text-#0a0a0a hover:text-blue-700" href="/#projects" alt="projects">Projects</a>
          <a className="text-#0a0a0a hover:text-blue-700" href="/#workhistory" alt="workhistory">Work History</a>
          <a className="text-#0a0a0a hover:text-blue-700" href="/#repository" alt="repository">Repositories</a>
          <a className="text-#0a0a0a hover:text-blue-700" href="/#techstack" alt="techstack">Tech Stack</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
