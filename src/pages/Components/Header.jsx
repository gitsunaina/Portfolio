import React, { useEffect, useState } from 'react'

 const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
    const handleDisplayMenu = () => {
      setOpenMenu(!openMenu);
    }

    const menus = [
      { name: 'Home', link: '#' },
      { name: 'About', link: '#about' },
      { name: 'Experience', link: '#experience' },
      { name: 'Projects', link: '#projects' },
      { name: 'Contact', link: '#contact' },
    ]
  return (
     <header className={`w-full`}>
      <div className='flex justify-between items-center relative lg:max-w-[1307px] px-[7%] lg:px-0 lg:mx-auto py-[12px]'>
        <span className='font-bold text-[#ffffff] ml-[-6px]'><img src='/assets/images/logo/logo-preview.png' alt='sunaina kashyap' width="60px" height="60px"></img></span>
        <div className='navbar' >
        <nav className='z-[1] navbar-toggle'>
            <ul className='flex justify-between gap-[20px]'>
              {menus.map((menu, index) => (
                <li key={index} className='font-bold text-white'>
                <a href={menu.link}>{menu.name}</a>
            </li>
              ))}
            </ul>
        </nav>
       <div className='navbar-toggle2'>
       <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false" onClick={handleDisplayMenu}>
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    {openMenu && (
      <div class="absolute right-0 w-full mx-auto left-0 mt-4" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg text-center bg-[#32353f] text-white dark:bg-gray-800 dark:border-gray-700 shadow-[0_6px_14px_#2e2e2e] h-[300px] gap-[20px]">
      {menus.map((menu, index) => (
        <li key={index}>
          <a href={menu.link} class="block py-2 px-3  rounded" aria-current="page">{menu.name}</a>
        </li>
      ))}
      </ul>
    </div>
    )}
    
       </div>
        </div>
        
        </div>
    </header>
  )
}

export default Header