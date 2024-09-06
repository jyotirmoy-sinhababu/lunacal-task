import React from 'react';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

import cube from '../../../public/cube.svg';

const HeroSection = () => {
  return (
    <div className='bg-[#363C43] h-[29vh] min-w-[37%] ml-[3%] z-30 rounded-[21px] overflow-y-auto flex '>
      <div className='bg-transparent ml-[7px] mr-[2px] mt-[14px] flex flex-col gap-[104px]'>
        <HiOutlineQuestionMarkCircle className='bg-transparent text-[#A3ADB2]' />
        <img className='w-[13px]' src={cube} alt='image of the cube' />
      </div>
      <div className='flex flex-col items-center  bg-transparent'>
        <div className='flex justify-around lg:w-[90%] w-[70%] bg-[#171717] mt-[22px] rounded-[20px] h-[49px] z-20 scroll-px-px'>
          <button className='flex-1 text-[8px] lg:text-[17px] text-[#A3ADB2] flex justify-center items-center focus:shadow-2xl focus:shadow-black focus:z-40 focus:bg-[#363C43] hover:bg-[#363C43] rounded-[20px] m-[3px]'>
            About
          </button>
          <button className='flex-1 text-[8px] lg:text-[17px] text-[#A3ADB2] flex justify-center items-center focus:shadow-2xl focus:shadow-black focus:z-40 focus:bg-[#363C43] hover:bg-[#363C43] rounded-[20px] m-[3px]'>
            Experiences
          </button>
          <button className='flex-1 text-[8px] lg:text-[17px] text-[#A3ADB2] flex justify-center items-center focus:shadow-2xl focus:shadow-black focus:z-40 focus:bg-[#363C43] hover:bg-[#363C43] rounded-[20px] m-[3px]'>
            Recommended
          </button>
        </div>{' '}
        <div className='flex justify-center items-center bg-transparent mx-[25px] mt-[19px]'>
          <p className='bg-transparent text-[#A3ADB2] lg:text-[1.1rem] text-[0.7rem] '>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
