import React from 'react'

function Contact() {
  return (
      <div className='flex items-center justify-center py-10'>
          <form className=' flex flex-col'>
              <div >
                  <p className='text-gray-300 border-b-pink-500 font-bold text-2xl border-b-4  inline'>Contact</p>
                  <p className='py-4 px-4 text-gray-300'>//contact me via my email ppldayo@gmail.com </p>
                 
              </div>
              <div className='pb-8'>
                  <input className=' py-1 px-1' type='text' placeholder='name' />
              </div>
              <div className='pb-8'>
                  <input className=' py-1 px-1' type='text' placeholder='Email' />
              </div>

              <div className='pb-8'>
                  <textarea className='' placeholder='Message' > </textarea> 
              </div>
          </form>
    </div>
  )
}

export default Contact
