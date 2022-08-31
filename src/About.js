import React from 'react'

function About() {
  return (
    <div className='w-full  bg-[#0a192f]  h-screen text-gray-500   '>
      <div className='  flex px-8 py-28 flex-col '>
        <p className='text-pink-300 ml-[0.37em]'>
          Hi my name is   </p>
        <h1 className='font-bold text-gray-450 text-3xl md:text-6xl'>Popular Dayor</h1>
        <h2 className='font-bold text-gray-500 text-4xl sm:text-6xl'>I'm a Full Stack Developer.</h2>
        <p className='py-4 max-w-[700px]'>i'm a full stack developer specialize in building  nice and eye-catchy web app and doing the server side along side computing the data in a decent and clean manner, i'm major in building responsive web app. </p>
        <div>
          <button className=' px-4  text-white bg-pink-500 py-2'>hire me </button>
        </div>
          </div>
      
    </div>
  )
}

export default About
