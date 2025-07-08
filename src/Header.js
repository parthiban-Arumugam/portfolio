import React, { useState } from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false); // State to show/hide menu

  return (
    <header className="flex justify-between items-center px-5 py-3 ">
      {/* Logo or Brand */}
      <a href="#" className="text-xl font-bold  text-white">parthi</a>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 font-mono text-white">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <Bars3BottomRightIcon className="h-6 w-6 text-white" />
      </button>

      {/* Mobile Menu List */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full shadow md:hidden">
          <ul className="flex flex-col p-4 gap-2 font-mono text-white text-center">
                <li><a href="#home" onClick={() => setShowMenu(false)}>HOME</a></li>
                <li><a href="#about" onClick={() => setShowMenu(false)}>ABOUT</a></li>
                <li><a href="#skills" onClick={() => setShowMenu(false)}>SKILLS</a></li>
                <li><a href="#projects" onClick={() => setShowMenu(false)}>PROJECT</a></li>
                <li><a href="#contact" onClick={() => setShowMenu(false)}>CONTACT</a></li>

            </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
