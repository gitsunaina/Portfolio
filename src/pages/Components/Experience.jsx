import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Experience = () => {
  return (
    <div className='lg:max-w-[1290px] lg:mx-auto relative mb-[12rem]' id='experience'>
        {/* <p className='text-center mb-[20px]'>What Skills I Have</p> */}
      
        <h2 className='font-bold text-[50px]  font-serif text-[#eaebec] '>My Skills</h2>
        <div className='flex flex-col gap-[20px] mt-[26px]'>
               <div className='flex gap-[20px] items-center'>
               <div className='w-[408px] h-[3px] bg-[#ffc86b] mt-[18px]'></div>
               <div className='flex gap-[20px] h-[146px]'>
                  <div className='flex items-center flex-col relative bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '><img src='/assets/images/html.png' className='w-[83px] h-[89px]'></img><small className='text-[#eaebec]  skill-key'>HTML</small></div>

                  <div className='flex items-center flex-col relative  bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '><img src='/assets/images/css.png' width="100px" height="100px" className='mt-[-5px]'></img><small className='text-[#eaebec] skill-key'>CSS</small></div>

                  <div className='flex items-center flex-col relative bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '><img src='/assets/images/javascript.png'  className='mt-[-4px] w-[100px] h-[91px]'></img><small className='text-[#eaebec] skill-key'>JavaScript</small></div>

                  <div className='flex items-center flex-col relative bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '><img src='/assets/images/tailwind.png' width="80px" className='mt-[20px]'></img><small className='text-[#eaebec] skill-key'>Tailwind</small></div>
               </div>
               
               </div>
               <div className='flex gap-[20px] justify-end items-center'>
               
               <div className='flex gap-[16px] h-[119px]'>
             
                 
                <div className='flex items-center flex-col relative bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '> <img src='/assets/images/bootstrap.png' width="91px"></img> <small className='text-[#eaebec] skill-key'>Bootstrap</small></div>
                <div className='flex items-center flex-col relative bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '> <img src='/assets/images/react.png' className='h-[92px] '></img> <small className='text-[#eaebec] skill-key'>React</small></div>
               <div className='flex items-center flex-col relative bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '>  <img src='/assets/images/nextjs.png' width="100px" className='h-[89px]'></img> <small className='text-[#eaebec] skill-key'>Next</small></div>
                 <div className='flex items-center flex-col relative bg-[#3d3e42] w-[116px] h-[136px] p-[14px] rounded-lg '><img src='/assets/images/redux.png' width="100px" className='h-[89px]'></img> <small className='text-[#eaebec] skill-key'>Redux</small></div>
               </div>
               <div className='w-[408px] h-[3px] bg-[#ffc86b] mt-[8px]'></div>
               </div>
            {/* <div className='w-[500px] h-auto py-[60px] px-[40px] rounded-[25px] bg-[#7062e3] text-white items-center flex flex-col gap-[20px] border-[1px]'>
                <p>FrontEnd Development</p>
                <div className='grid grid-rows-3'>
                      <div className='grid grid-cols-2 gap-[10rem]'>
                         <div className='flex gap-[12px]  items-center'><FontAwesomeIcon icon={faCircleCheck} />HTML</div>
                         <div className='flex gap-[12px]  items-center'><FontAwesomeIcon icon={faCircleCheck} />CSS</div>
                      </div>
                      <div className='grid grid-cols-2 gap-[10rem]'>
                         <div className='flex gap-[12px]  items-center'><FontAwesomeIcon icon={faCircleCheck} />JAVASCRIPT</div>
                         <div className='flex gap-[12px]  items-center'><FontAwesomeIcon icon={faCircleCheck} />TAILWIND</div>
                      </div>
                      <div className='grid grid-cols-2 gap-[10rem]'>
                         <div className='flex gap-[12px]  items-center'><FontAwesomeIcon icon={faCircleCheck} />REACT</div>
                         <div className='flex gap-[12px]  items-center'><FontAwesomeIcon icon={faCircleCheck} />REDUX</div>
                      </div>
                      <div className='grid grid-cols-1 gap-[10rem]'>
                         <div className='flex gap-[12px]  items-center'><FontAwesomeIcon icon={faCircleCheck} />REACT ADMIN</div>
                      </div>
                  
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Experience