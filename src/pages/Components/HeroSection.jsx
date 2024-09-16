import React from 'react'
import MyContext from '../MyContext';
import SocialIcons from './SocialIcons';
import Button from './Button';

 const HeroSection = () => {
    // const {somedata} = useContext(MyContext);
    
  return (
 
  <section className='min-h-[89vh] px-[7%] pb-[1rem] flex items-center shadow-[0_4px_30px_-2px]' id='home'>
    <div className='max-w-[36rem]'>
    <h2 className='text-[18px] font-bold text-[#eaebec] mb-[-8px]'>Hello, I'm</h2>
         <h1 className='text-[50px] font-bold text-[#ffc86b]'>Sunaina Kashyap</h1>
         <p className='text-[#eaebec] text-[24px] mt-[4px]' style={{fontFamily: 'cursive'}}>Frontend Developer</p>
         <p className='text-[#eaebec] mt-[10px]'>"Driven by a passion for clean code and elegant design, I develop robust frontend solutions that enhance user interaction."</p>
         <SocialIcons />
         <Button title="Download CV" className='max-w-[200px] mt-4  w-[180px]'/>
    </div>
    <div className='profession-container'>
         <div className='profession-box'>
             <div className='profession' style={{'--i':0}}>
                 <h3>Frontend Developer</h3>
             </div>
             <div className='profession' style={{'--i':1}}>
                 <h3>Album Designer</h3>
             </div>
             {/* <div className='profession' style={{'--i':2}}>
                 <h3>Web Designer</h3>
             </div>
             <div className='profession' style={{'--i':3}}>
                 <h3>React Developer</h3>
             </div> */}
             <div className="circle"></div>
         </div>
         <div className="overlay"></div>
      </div>

  </section>


  )
}
export default HeroSection