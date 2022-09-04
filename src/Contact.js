import React from 'react'

function Contact() {
  return (
      <div name="contact" className='flex items-center justify-center py-10'>
          <form method='POST' action='https://getform.io/f/ac7dee29-a2d4-4fed-9a98-8f99d92a4cb8' className=' flex flex-col'>
              <div >
                  <p className='text-gray-300 border-b-pink-500 font-bold text-2xl border-b-4  inline'>Contact</p>
                  <p className='py-4 px-4 text-gray-300'>//contact me via my email ppldayo@gmail.com </p>
                 
              </div>
              <div className='pb-8'>
                  <input className='p-2' type='text' placeholder='name' />
              </div>
              <div className='pb-8'>
                  <input className='p-2' type='text' placeholder='Email' />
              </div>

              <div className='py-2'>
                  <textarea className='' rows="6" cols="30" placeholder='Message' ></textarea>
              </div>
              <div>
              <button className='text-gray-300 border p-2 hover:bg-pink-500'>let's collaborate</button>
              </div>
          </form>
    </div>
  )
}

export default Contact
