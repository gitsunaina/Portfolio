import React, { useEffect, useState } from 'react'

 const Header = () => {
  // const [isSticky, setIsSticky] = useState(false);

  // const handleScroll = () => {
  //   // Check if the page has been scrolled beyond 50px
  //   if (window.scrollY > 50) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

    const menus = [
      { name: 'Home', link: '#' },
      { name: 'About', link: '#about' },
      { name: 'Experience', link: '#experience' },
      { name: 'Projects', link: '#projects' },
      { name: 'Contact', link: '#contact' },
    ]
  return (
     <header className={`w-full  
   
     `}>
      <div className='flex justify-between items-center lg:max-w-[1307px]  lg:mx-auto py-[12px]'>
        <span className='font-bold text-[#ffffff] ml-[-6px]'><img src='/assets/images/logo/logo-preview.png' alt='sunaina kashyap' width="60px" height="60px"></img></span>
        <nav className='z-[1]'>
            <ul className='flex justify-between gap-[20px]'>
              {menus.map((menu, index) => (
                <li key={index} className='font-bold text-white'>
                <a href={menu.link}>{menu.name}</a>
            </li>
              ))}
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header