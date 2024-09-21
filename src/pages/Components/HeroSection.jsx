import React from 'react';
import SocialIcons from './SocialIcons';
import Button from './Button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='w-full min-h-[619px] px-[7%] pb-[1rem] flex items-center shadow-[0_4px_30px_-2px]' id='home'>
      <div className='w-full lg:max-w-[1290px] mx-auto flex flex-col lg:flex-row items-start lg:items-center'>
        {/* Left Section - Text and Social Icons */}
        <div className='max-w-[36rem] lg:w-1/2'>
          <h2 className='text-[18px] font-bold text-[#eaebec] mb-[-8px]'>Hello, I'm</h2>
          <h1 className='text-[50px] font-bold text-[#ffc86b]'>Sunaina Kashyap</h1>
          <p className='text-[#eaebec] text-[24px] mt-[4px]' style={{ fontFamily: 'cursive' }}>Frontend Developer</p>
          <p className='text-[#eaebec] mt-[10px]'>
            "Driven by a passion for clean code and elegant design, I develop robust frontend solutions that enhance user interaction."
          </p>
          <SocialIcons />
          <Link href={'/assets/doc/my2024CV.pdf'} target='_blank' download>
            <Button title="Download CV" className='max-w-[200px] mt-4 w-[180px]' />
          </Link>
        </div>

        {/* Right Section - Profession Container */}
        <div className='profession-container lg:w-[52%] mt-8 lg:mt-0'>
          <div className='profession-box'>
            <div className='profession' style={{ '--i': 0 }}>
              <h3>Frontend Developer</h3>
            </div>
            <div className='profession' style={{ '--i': 1 }}>
              <h3>Album Designer</h3>
            </div>
            {/* Additional professions can be added here */}
            <div className="circle"></div>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
