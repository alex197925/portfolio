/** @format */

import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='w-full h-[80px] flex items-center justify-between text-gray-300 px-4 bg-[#0a192f] z-[2000]'>
      <div>
        <img src={Logo} alt='logo' style={{ width: "70px" }} />
      </div>
      {/* Menu */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          Home
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          About
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          Skills
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          Work
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          Contact
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden'></div>
    </div>
  );
};

export default Navbar;
