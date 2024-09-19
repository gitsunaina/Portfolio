import Link from 'next/link'
import React from 'react'

 const SocialIcons = () => {
    const icons = [{
        title: ''
    }]
  return (
   
      <ul className='flex  gap-2 items-center my-[14px]'>
        <Link href={'https://www.facebook.com/sunaina.kumari.353803'} target='_blank'><li><i className="fa-brands fa-facebook text-[#f9f9f9] text-[20px]"></i></li></Link>
        <Link href={'https://www.linkedin.com/in/thesunainakashyap/'} target='_blank'> <li><i className="fa-brands fa-linkedin-in text-[#f9f9f9] text-[20px]"></i></li></Link>
        <Link href={'mailto:sunainaqq26@gmail.com'}> <li><i className="fa-solid fa-envelope text-[#f9f9f9] text-[20px]"></i></li></Link>
        <Link href={'https://www.instagram.com/kashyap_sunaina26'} target='_blank'> <li><i className="fa-brands fa-instagram text-[#f9f9f9] text-[20px]"></i></li></Link>
      </ul>
 
  )
}
export default SocialIcons