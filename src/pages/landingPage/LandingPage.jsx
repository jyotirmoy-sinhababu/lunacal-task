import React from 'react';

import EmptyCnt from '../../components/emptyCnt/EmptyCnt';
import HeroSection from '../../components/heroComp/HeroSection';
import GallerySection from '../../components/gallerySection/GallerySection';

const LandingPage = () => {
  return (
    <div className='bg-[#40474d] h-[80vh] w-[80%] rounded-[31px] z-10 flex justify-around lg:justify-normal'>
      <EmptyCnt />
      <div className='flex flex-col bg-transparent w-[40%] mt-[5.5%] sm:ml-[2%] '>
        <HeroSection />
        <GallerySection />
      </div>
    </div>
  );
};

export default LandingPage;
