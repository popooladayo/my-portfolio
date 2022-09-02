import React, { useState } from 'react'

import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from './Context';

function Navbar() {
  console.log(useGlobalContext())
  const { name, setName, nav, setNav } = useGlobalContext()

  const handleClick = () => {

    setNav(!nav)
  }
  return (
    
    <div className='flex h-[80px]  bg-[#0a192f] text-gray-500   w-full justify-between items-center px-8 font-bold text-lg' >
      <div className='font-bold px-2 text-xl md:text-4xl '>   Popular  Dayo</div>
      <ul className='hidden   md:flex  ' >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleClick} className='md:hidden z-10 '>
        {!nav ? <FiAlignJustify /> : <AiOutlineClose />}
      </div>

      <ul className={!nav ? 'hidden' : 'bg-[#0a192f] w-full top-0 left-0 absolute h-screen flex flex-col justify-center items-center'} >
        <li className='text-2xl py-6 '>Home</li>
        <li className='text-2xl py-6'>About</li>
        <li className='text-2xl py-6'>Skills</li>
        <li className='text-2xl py-6'>Contact</li>
      </ul>


    </div>


  )
}

export default Navbar
