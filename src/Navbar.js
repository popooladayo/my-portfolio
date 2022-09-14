import React, { useState } from 'react'

import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from './Context';
import { Link } from 'react-scroll'

function Navbar() {
  console.log(useGlobalContext())
  const { name, setName, nav, setNav } = useGlobalContext()

  const handleClick = () => {

    setNav(!nav)
  }
  return (
    
    <div className='flex h-[80px]  bg-[#0a192f] text-white   w-full justify-between items-center px-8 font-bold text-lg' >
      <div className='font-bold px-2 text-xl md:text-4xl '>   Popular  Dayo</div>
      <ul className='hidden   md:flex   ' >
        <li  className='hover:text-pink-400'>
          <Link  to="home"  smooth={true}  duration={500} >
            Home
          </Link>
        </li >
        <li className='hover:text-pink-400'>
          <Link to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li className='hover:text-pink-400'>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='hover:text-pink-400'>
          <Link to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className='md:hidden z-10 '>
        {!nav ? <FiAlignJustify /> : <AiOutlineClose />}
      </div>

      <ul className={!nav ? 'hidden' : 'bg-[#0a192f] w-full top-0 left-0 bottom-0 absolute h-screen flex flex-col justify-center items-center'} >
        <li className='text-2xl py-6 '>
          <Link to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li className='text-2xl py-6'>
          <Link to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li className='text-2xl py-6'>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='text-2xl py-6'>
          <Link to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>


    </div>


  )
}

export default Navbar
