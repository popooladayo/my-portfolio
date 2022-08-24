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
    <div className=' h-[80px]  bg-[#171721] text-gray-500 w-full items-center  text-gray font-bold text-lg p-30' >



      <ul className='hidden md:flex justify-between mx-auto ' >
        <li className=' text-2xl'><h1>Popular  Dayo</h1></li>

        <li>Home</li>
        <li>Resume</li>
        <li>Github</li>
        <li>Linkedin</li>
        <li>Skills</li>
      
       
      </ul>
      <div onClick={handleClick} className='md:hidden '>
        {!nav ? <FiAlignJustify /> : <AiOutlineClose />}
      </div>

      <ul className={!nav ? 'hidden' : 'bg-[#171721] w-full h-screen  flex flex-col items-center justify-center'} >
        <li className='text-2xl'>Home</li>
        <li className='text-2xl'>Resume</li>
        <li className='text-2xl'>Github</li>
        <li className='text-2xl'>Linkedin</li>
        <li className='text-2xl'>Skills</li>
      </ul>


    </div>


  )
}

export default Navbar
