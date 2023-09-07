import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
<nav className={`py-5 h-24 p-4 ${menuOpen ? 'bg-white' : ''}`}>
  <div>
    <div className="flex justify-between items-center">
      <button
        className="md:hidden text-#0a0a0a hover:text-blue-700"
        onClick={toggleMenu}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>
    </div>
    <div
      className={`${
        menuOpen
          ? 'flex justify-evenly items-center' // Center the divs
          : 'hidden'
      } md:flex flex-row justify-center justfiy-content  md:space-y-0 md:space-x-4 mt-1 md:mt-0`}
    >
      <div className="text-#0a0a0a hover:text-blue-700">
        <Link to="/">Home</Link>
      </div>
      {/* <li className="text-#0a0a0a hover:text-blue-700">
        <Link to="/about">About</Link>
      </li> */}
      <div className="text-#0a0a0a hover:text-blue-700">
        <Link to="/project">Projects</Link>
      </div>
    </div>
  </div>
</nav>


  );
};

export default NavBar;
