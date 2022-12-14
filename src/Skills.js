import React from 'react'
import html from './assest/html.png'
import css from './assest/css.png'
import javascript from './assest/javascript.png'
import react from './assest/react.png'
import tailwind from './assest/tailwind.png'
import github1 from './assest/github1.png'



function Skills() {
  return (
    <div name="skills" className=' text-white  py-32 ml:10'>
      <div className='md:mx-auto'>
      <div className='text-center '>
        <p className='font-bold text-2xl border-b-4 inline border-pink-500'>Skills</p>
        <p className='py-4'> these are the technologies i work with</p>
      </div>
      <div className=' w-full grid grid-cols-2 md:grid-cols-3 items-center justify-center mx-auto' >
      <div >
          <img className='w-20 shadow-md shadow-[#0a165f] hover:scale-110 duration-300' src={html}  alt="HTML" />
        <p className='py-4 ml-4'>HTML</p>
      </div>
      <div>
          <img className='w-20 shadow-md shadow-[#0a165f] hover:scale-110 duration-300' src={css} alt="ALT" />
    <p className='py-4 ml-6'>CSS</p>
      </div>
      <div>
          <img className='w-20 shadow-md shadow-[#0a165f] hover:scale-110 duration-300' src={javascript} alt="JAVASCRIPT" />
          <p>JAVASCRIPT</p>     </div>
        <div>
          <img className='w-20 shadow-md shadow-[#0a165f] hover:scale-110 duration-300' src={react} alt="REACT" />
          <p className='ml-2'>REACT</p>
        </div>
        <div>
          <img className='w-20 shadow-md shadow-[#0a165f] hover:scale-110 duration-300' src={tailwind} alt="TAILWIND" />
          <p>TAILWIND</p>
        </div>
        <div>
          <img className='w-20 shadow-md shadow-[#0a165f] hover:scale-110 duration-300' src={github1} alt="GITHUB" />
          <p className='ml-1'>GITHUB</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills