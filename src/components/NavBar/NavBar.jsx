import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-#f1f1f1 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-semibold text-lg"> </Link>
          <button
            className="md:hidden text-#0a0a0a hover:text-blue-700"
            onClick={toggleMenu}>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul
          className={`${menuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row justify-center justfiy-content space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}>
          <li className="text-#0a0a0a hover:text-blue-700">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="text-#0a0a0a hover:text-blue-700">
            <Link to="/about">About</Link>
          </li> */}
          <li className="text-#0a0a0a hover:text-blue-700">
            <Link to="/project">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
