import React from 'react';

import EmptyCnt from '../../components/emptyCnt/EmptyCnt';
import HeroSection from '../../components/heroComp/HeroSection';

const LandingPage = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='bg-[#40474d] h-[80vh] w-[80%] rounded-[31px] z-10 flex'>
        <EmptyCnt />
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;
