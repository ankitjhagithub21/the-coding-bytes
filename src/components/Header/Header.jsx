import React, { useState } from 'react';
import links from './data';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode, MdWbSunny } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { useTheme } from '../../context/ThemeContext';
import './header.css';

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 w-full z-50 ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container mx-auto lg:px-10 p-2 lg:py-4 flex justify-between items-center'>
        <Link className='flex font-bold items-center min-w-fit hover:text-yellow-500 z-50' to={'/'} id='logo' autoFocus>
          <CiUser className='lg:text-5xl text-3xl' />
          <span className='mt-2 text-xl'>The Coding Bytes</span>
        </Link>

        <div className={`flex items-center gap-5 w-full ${active ? 'active' : ''}`} id='navbar'>
          <nav role="navigation" className={`flex gap-7 w-full h-full justify-center items-center lg:-ml-20 ml-0 lg:mt-2 ${isDarkMode ? 'dark' : 'light'}`}>
            {links.map((link) => (
              <Link key={link.id} to={link.path} className='font-bold hover:text-yellow-500' onClick={handleClick}>
                {link.pathName}
              </Link>
            ))}
          </nav>
          <button id='darkMode' onClick={toggleTheme} tabIndex="0" aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {isDarkMode ? <MdWbSunny className='text-3xl' /> : <MdOutlineDarkMode className='text-3xl' />}
          </button>
        </div>

        <button onClick={() => setActive(!active)} id='menuBtn' className='text-2xl' tabIndex="0" aria-label={active ? 'Close Menu' : 'Open Menu'}>
          {active ? <IoClose /> : <RiMenu3Fill />}
        </button>
      </div>
    </header>
  );
};

export default Header;
