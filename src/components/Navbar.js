/** @format */
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import Resume from "../assets/cv/TOLOK OLEKSANDR.pdf";
import Certificates from "../assets/certificates/cypress.pdf";
import { Link } from "react-scroll";

import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-[20000]'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: "100px" }} />
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }>
        {/* Add hove effect on links - (hover:text-[#15803d] duration-150), example */}
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl font-thin hover:text-[#B9464C] duration-150'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/alex-t-8555b0267/?originalSubdomain=be'
              target='blank'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/alex197925'
              target='blank'>
              Github <FaGithub size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#047857]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Mail <HiOutlineMail size={30} />
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#047857]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={Resume}
              target='_blank'
              rel='noreferrer'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#482289]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={Certificates}
              target='_blank'
              rel='noreferrer'>
              Cypress Certificate <FcDocument size={50} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
