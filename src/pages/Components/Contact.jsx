import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='lg:max-w-[1290px] lg:mx-auto relative mb-[70px] w-full contact-container' id='contact'>
    <h2 className='font-bold text-[50px] font-serif text-[#eaebec]'>Contact Me</h2>
    <div className='w-[110px] h-[3px] bg-[#ffc86b] mt-[15px]'></div>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-[5rem] h-full mt-[50px]'>
    <div className='flex justify-center flex-col items-center lg:gap-[20px] gap-0 text-[30px] order-2 lg:order-1'>
       <div className='flex lg:gap-[20px] gap-0 lg:flex-row flex-col'>
       <div className='lg:bg-[#3d3e42] text-[20px] lg:text-[24px] bg-none px-[20px] py-[10px] flex items-center rounded-lg gap-[12px] shadow-[0px_0px_18px_0px]]'><i class="fa-brands fa-whatsapp mt-[2px]  text-[#ffc86b] text-[20px]"></i>
       <small className='text-[#f9f9f9]'>xxxxxxxx92</small></div>
       <div className='lg:bg-[#3d3e42] text-[20px] lg:text-[24px] bg-none px-[20px] py-[10px] flex items-center rounded-lg gap-[12px] shadow-[0px_0px_18px_0px]]'><i class="fa-solid fa-envelope mt-[2px] text-[#ffc86b] text-[20px]"></i>
       <Link className='text-[#f9f9f9]' href={"mailto:sunainaqq26@gmail.com"}>sunainaqq26@gmail.com</Link></div>
       </div>
       <div className='lg:bg-[#3d3e42] bg-none lg:px-[20px] justify-center lg:ms-0 text-[20px] lg:text-[24px] py-[10px] flex items-center rounded-lg gap-[12px] shadow-[0px_0px_18px_0px]] w-full'>
       <div className='w-[250px] flex gap-[12px]'>
       <i class="fa-solid fa-location-dot mt-[2px] text-[#ffc86b] text-[20px]"></i>
       <small className='text-[#f9f9f9]'>Gurgaon, Haryana</small>
       </div>
       </div>
       </div>
            <div className='flex flex-col justify-center  gap-4 lg:p-[50px] p-0 order-1 lg:order-2'>
                
<form name='contact' data-netlify="true" action="post">
  <label htmlFor="name-icon" className="block mb-3 text-sm font-medium text-[#ffc86b] dark:text-white">Name</label>
  <div className="relative mb-5">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg> */}
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
    </div>
    <input type="text" id="name-icon" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" />
  </div>

  <label htmlFor="email-address-icon" className="block mb-3 text-sm font-medium text-[#ffc86b] dark:text-white">Email</label>
  <div className="relative mb-5">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input type="email" name='email' id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" />
  </div>

  <label htmlFor="message" className="block mb-3 text-sm font-medium text-[#ffc86b] dark:text-white">Your message</label>
  <textarea id="message" rows="8" name='message' class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
  <button className="hero-btn mt-6  w-full text-white border-[#ffc86b] border-[1px] rounded-md p-[12px] shadow-[0px_0px_10px_0px]" type='submit'>Send Message</button>
</form>

            </div>
        </div>
    </div>
  )
}

export default Contact