import React from 'react'

const About = () => {
    // const techs = [
    //     'javascript', 'reactjs', 'redux', 'next js', 'html', 'css', 'bootstrap', 'tailwind', 'git', 'github','react admin', 'adobe photoshop' , 'canva'
    // ]
  return (
    <section className='w-full lg:max-w-[1290px] lg:mx-auto  my-[11rem] about-container' id='about'>
          
                <h2 className='font-bold text-[50px] font-serif text-[#eaebec]'>About</h2>
                <div className='flex mt-[20px]'>
                <div className='w-[110px] h-[3px] bg-[#ffc86b] mt-[15px]'></div>
               <div className='flex flex-col gap-[10px] w-full about-desc'>
               <p className='text-[#eaebec] text-[18px] sm:text-[18px] lg:text-[22px] sm:w-full'>Experienced Javascript Developer with <span className='text-[#ffc86b]'> 1 years </span> in the industry. Proficient with <span className='text-[#ffc86b]'>React</span>. Used problem-solving aptitude to enhance application performance by <span className='text-[#ffc86b]'>15%</span>. Enhanced College based Application for Education Organisation.</p>
                        <div className='flex gap-[36px] mt-[26px]'>
                    <div className='about-batch text-white items-center flex flex-col p-[19px] rounded-[36px] max-w-[250px] w-[200px] border-[1px] shadow-[0px_0px_15px_0px]'>
                    <span className='mb-[25px]'><i class="fa-solid fa-award"></i></span>
                    <span className='mb-[10px] font-medium'>Experience</span>
                    <span className='font-bold'>1yr</span>
                    </div>

                    <div className='about-batch text-white items-center flex flex-col  p-[19px] rounded-[36px] max-w-[250px] w-[200px] border-[1px] shadow-[0px_0px_15px_0px]'>
                    <span className='mb-[25px]'><i class="fa-regular fa-building"></i></span>
                    <span className='mb-[10px] font-medium'>Organization</span>
                    <span className='text-center font-bold'>Techvins Soft pvt ltd</span>
                    </div>
                </div>
               </div>
                </div>
              
            
                {/* <div className='w-[73%] flex flex-wrap p-[20px] gap-[11px]'>
                    {techs.map((tech, index) => (
                       <span key={index} className='border-full p-2'>#{tech}</span>
                    ))}
                </div> */}
              
                {/* <div>
                <h2 className='font-bold text-[25px]'>TECH STACK</h2>
                <div className='flex gap-[40px]'>
                    <img src='/assets/images/javascript.png'></img>
                    <img src='/assets/images/react.png'></img>
                    <img src='/assets/images/nextjs.png'></img>
                    <img src='/assets/images/tailwind.png'></img>
                </div>
                </div> */}
           
    </section>
  )
}

export default About