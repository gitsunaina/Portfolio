import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='lg:max-w-[1290px] lg:mx-auto relative my-[11rem]' id='projects'>
       <h2 className='font-bold text-[50px] font-serif text-[#eaebec] text-center'>Latest Works</h2>
       {/* <div className='w-[407px] h-[3px] bg-[#ffc86b] mt-[18px] mx-auto'></div> */}
        <div className='project-container'>
        <div className='flex justify-between items-center project-section'>
         
         <div className='w-full '>
         <div className=' w-[70%]  group relative' >
         <div className='h-[2px] tool-ln bg-[#ffc86b] absolute top-1/2 left-[91%] right-0'></div>
         <div className='w-4 h-4 rounded-full border-[3px] absolute  tip-round  top-[143px] translate-x-1/2 bg-white z-10'></div>
            <span className='flex bg-[#fc815c] absolute left-1/2 -translate-x-1/2 tooltip px-4 py-2 rounded w-max items-center gap-2 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:translate-x-1/2 after:rotate-45 after:-bottom-[8px] opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300 group-hover:opacity-100'>CollegeBharat
            <Link href={"https://www.collegebharat.com"} target='_blank'> <svg xmlns='http://www.w3.org/2000/svg' width="16" height="16" viewBox='0 0 24 24' fill='none' stroke='currentcolor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-external-link'>
             <path d='M18 13v6a2 2 0 0 1-2 2H5A2 2 0 0 1 3 19V8a2 2 0 0 1 2-2h6'></path>
             <polyline points='15 3 21 3 21 9'></polyline>
             <line x1="10" y1="14" x2="21" y2="3"></line>
             </svg></Link>
            </span>
           
            <img src='/assets/images/collegebharat.png' className='project-image'  style={{width:'800px', height: '300px', objectFit: 'contain', position: 'relative'}}/>
            
         </div>
         </div>
         <div className='flex flex-col lg:ms-20 ms-[3rem] lg:w-full '>
            <h3 className='font-bold text-[18px] text-[#ffc86b]'>CollegeBharat.com</h3>
            <ul style={{listStyle: 'disc'}}>
            <li className='my-[4px] text-[#eaebec]'>
            Spearheaded the development of the website from scratch using Next.js.   </li>
            <li className='my-[4px] text-[#eaebec]'>
            Implemented seamless migration of diverse features such as search and filtering across multiple pages.</li>
            <li className='my-[4px] text-[#eaebec]'> Developed user authentication and dynamic lead form functionality.</li>
           <li className='my-[4px] text-[#eaebec]'> Collaborated with the team to achieve SEO goals and improve overall website performance.</li>
         
            </ul>
            <div className='flex gap-[20px] text-[#ffc86b]'>
             <span>#react.js</span>
             <span>#next.js</span>
             <span>#redux</span>
            </div>
         </div>
         </div>
    

         <div className='flex justify-between items-center project-section mb-[15px]'>
         <div className='flex flex-col lg:w-full lg:ms-20 ms-[3rem] pr-[20px] '>
            <h3 className='font-bold text-[18px] text-[#ffc86b]'>Techvins</h3>
               <ul style={{listStyle: 'disc'}}>
                  <li className='my-[4px] text-[#eaebec]'>Developed a complete website from scratch using Next.js, implementing responsive design, animations, and modern UI for a seamless user experience.</li>
              <li className='my-[4px] text-[#eaebec]'> Integrated pagination for the blog section, ensuring efficient data fetching and smooth navigation across multiple pages.</li>
            <li className='my-[4px] text-[#eaebec]'>Built an authenticated contact form with validation and security features to ensure safe communication with potential clients.
             Continuously improved and maintained the website to meet evolving business requirements.</li>
               </ul>
            <div className='flex gap-[20px] text-[#ffc86b]'>
             <span>#react.js</span>
             <span>#next.js</span>
            </div>
         </div>
         <div className='w-full mr-[90px]'>
         <div className=' w-[70%]  group relative float-right' >
         
            <span className='flex bg-[#fc815c] absolute left-[64%] -translate-x-1/2 tooltip px-4 py-2 rounded w-max items-center gap-2 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:translate-x-1/2 after:rotate-45 after:-bottom-[8px] opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300 group-hover:opacity-100'>Techvins
            <Link href={'https://www.techvins.com'} target='_blank'>
            <svg xmlns='http://www.w3.org/2000/svg' width="16" height="16" viewBox='0 0 24 24' fill='none' stroke='currentcolor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-external-link'>
             <path d='M18 13v6a2 2 0 0 1-2 2H5A2 2 0 0 1 3 19V8a2 2 0 0 1 2-2h6'></path>
             <polyline points='15 3 21 3 21 9'></polyline>
             <line x1="10" y1="14" x2="21" y2="3"></line>
             </svg></Link>
            </span>
           
            <img src='/assets/images/techvins.png' className='project-image lg:ms-[55px] ms-[46px] w-[800px] h-[300px] object-contain relative' />
           
            <div className='h-[2px] tool-ln2 bg-[#ffc86b] absolute top-1/2  lg:right-[77%] right-[72%]'></div>
            <div className='w-4 h-4 rounded-full border-[3px] absolute  tip-round2 top-[143px] translate-x-1/2 bg-white z-10'></div>
        
         </div>
         </div>
        
         </div>

         <div className='flex justify-between items-center project-section'>
         <div className='w-full '>
         <div className=' w-[70%]  group relative' >
         <div className='h-[2px] tool-ln bg-[#ffc86b] absolute top-1/2 left-[91%] right-0'></div>
         <div className='w-4 h-4 rounded-full border-[3px] absolute tip-round  top-[143px] translate-x-1/2 bg-white z-10'></div>
            <span className='flex bg-[#fc815c] absolute left-1/2 -translate-x-1/2 tooltip px-4 py-2 rounded w-max items-center gap-2 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:translate-x-1/2 after:rotate-45 after:-bottom-[8px] opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300 group-hover:opacity-100'>RealBetter CRM
            {/* <Link href={'www'}> */}
            <svg xmlns='http://www.w3.org/2000/svg' width="16" height="16" viewBox='0 0 24 24' fill='none' stroke='currentcolor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-external-link'>
             <path d='M18 13v6a2 2 0 0 1-2 2H5A2 2 0 0 1 3 19V8a2 2 0 0 1 2-2h6'></path>
             <polyline points='15 3 21 3 21 9'></polyline>
             <line x1="10" y1="14" x2="21" y2="3"></line>
             </svg>
            {/* </Link> */}
            </span>
           
            <img src='/assets/images/project.png' className='project-image'  style={{width:'800px', height: '300px', objectFit: 'contain', position: 'relative'}}/>
            
         </div>
         </div>
         <div className='flex flex-col lg:w-full lg:ms-20 ms-[3rem] '>
            <h3 className='font-bold text-[18px] text-[#ffc86b]'>RealBetter CRM</h3>
          
            <ul  style={{listStyle: 'disc'}}>
               <li className='my-[4px] text-[#eaebec]'>Developed and customized a Real Estate CRM using React Admin to manage client interactions, leads, and property listings in a centralized dashboard.</li>

              <li className='my-[4px] text-[#eaebec]'> Implemented automated communication features, allowing agents to send personalized emails, SMS notifications, and manage marketing campaigns efficiently.</li>
            </ul>
            <div className='flex gap-[20px] text-[#ffc86b]'>
             <span>#react.js</span>
             <span>#react admin</span>
            </div>
         </div>
         </div>

         <div className='flex justify-between items-center project-section'>
         <div className='flex flex-col lg:w-full lg:ms-20 ms-[3rem]  '>
            <h3 className='font-bold text-[18px] text-[#ffc86b]'>HouseBanao</h3>
            <ul style={{listStyle: 'disc'}}>
               <li className='my-[4px] text-[#eaebec]'>Developed an interactive homepage with a dynamic carousel, accordion, and marquee using HTML5, CSS3, and JavaScript for optimal user engagement.
                  </li>
                  <li className='my-[4px] text-[#eaebec]'>  Implemented a responsive design ensuring cross-browser compatibility and performance optimization for fast load times and smooth interactions.</li>
            </ul>
           
            <div className='flex gap-[20px] text-[#ffc86b]'>
             <span>#react.js</span>
            </div>
         </div>
         <div className='w-full '>
         <div className=' w-[70%] group relative float-right' >
         
            <span className='flex bg-[#fc815c] absolute left-1/2 -translate-x-1/2 tooltip px-4 py-2 rounded w-max items-center gap-2 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:translate-x-1/2 after:rotate-45 after:-bottom-[8px] opacity-0 translate-y-2 group-hover:translate-y-0 transition-all duration-300 group-hover:opacity-100'>HouseBanao
            <Link href={'https://www.housebanao.com/'} target='_blank'>
            <svg xmlns='http://www.w3.org/2000/svg' width="16" height="16" viewBox='0 0 24 24' fill='none' stroke='currentcolor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-external-link'>
             <path d='M18 13v6a2 2 0 0 1-2 2H5A2 2 0 0 1 3 19V8a2 2 0 0 1 2-2h6'></path>
             <polyline points='15 3 21 3 21 9'></polyline>
             <line x1="10" y1="14" x2="21" y2="3"></line>
             </svg>
            </Link>
            </span>
           
            <img src='/assets/images/housebanao.png' className='project-image'  style={{width:'800px', height: '300px', objectFit: 'contain', position: 'relative'}}/>
           
            <div className='h-[2px] tool-ln bg-[#ffc86b] absolute top-1/2  right-[91%]'></div>
            <div className='w-4 h-4 rounded-full border-[3px] absolute  tip-round4 top-[143px] translate-x-1/2 bg-white z-10'></div>
        
         </div>
         </div>
        
         </div>
        </div>

        <div className='w-[3.2px] bg-[#ffc86b] absolute top-[95px] bottom-0 left-1/2 -translate-x-1/2 intermediateLine'></div>
    </div>
  )
}

export default Projects