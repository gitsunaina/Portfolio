import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div className='lg:max-w-[1290px] lg:mx-auto relative mb-[70px]' id='contact'>
    <h2 className='font-bold text-[50px] font-serif text-[#eaebec]'>Contact</h2>
    <div className='w-[110px] h-[3px] bg-[#ffc86b] mt-[15px]'></div>
    <div className='grid grid-cols-2 gap-4 h-full mt-[50px]'>
    <div className='flex justify-center flex-col items-center gap-[20px] text-[30px]'>
       <div className='flex gap-[20px]'>
       <div className='bg-[#3d3e42] px-[20px] py-[10px] flex items-center rounded-lg gap-[12px] shadow-[0px_0px_18px_0px]]'><i class="fa-brands fa-whatsapp mt-[2px]  text-[#ffc86b] text-[20px]"></i>
       <small className='text-[#f9f9f9]'>xxxxxxxx92</small></div>
       <div className='bg-[#3d3e42] px-[20px] py-[10px] flex items-center rounded-lg gap-[12px] shadow-[0px_0px_18px_0px]]'><i class="fa-solid fa-envelope mt-[2px] text-[#ffc86b] text-[20px]"></i>
       <small className='text-[#f9f9f9]'>sunainaqq26@gmail.com</small></div>
       </div>
       <div className='bg-[#3d3e42] px-[20px] py-[10px] flex items-center rounded-lg gap-[12px] shadow-[0px_0px_18px_0px]]'>
       <i class="fa-solid fa-location-dot mt-[2px] text-[#ffc86b] text-[20px]"></i>
       <small className='text-[#f9f9f9]'>Gurgaon, Haryana</small>
       </div>
       </div>
            <div className='flex flex-col justify-center  gap-4 p-[50px]'>
                
<form >
  <label htmlFor="name-icon" className="block mb-3 text-sm font-medium text-[#ffc86b] dark:text-white">Name</label>
  <div className="relative mb-5">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input type="text" id="name-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" />
  </div>

  <label htmlFor="email-address-icon" className="block mb-3 text-sm font-medium text-[#ffc86b] dark:text-white">Email</label>
  <div className="relative mb-5">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input type="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
  </div>

  <label htmlFor="message" className="block mb-3 text-sm font-medium text-[#ffc86b] dark:text-white">Your message</label>
  <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
<Button title={"Send Message"} className='mt-6  w-full'/>
</form>

            </div>
        </div>
    </div>
  )
}

export default Contact