import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import cube from '../../../public/cube.svg';

import { useState } from 'react';

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);

  const startIndex = currentIndex;
  const endIndex = startIndex + 3;
  const imagesToDisplay = images.slice(startIndex, endIndex);

  const handleAddImage = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        newImages.push(imageData);
        setImages((prevImages) => [...prevImages, ...newImages]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  return (
    <div className='bg-[#363C43] h-[29vh] min-w-[37%] mt-[5.5%] ml-[3%] z-30 rounded-[21px] overflow-y-auto flex'>
      <div className='bg-transparent ml-[7px] mr-[2px] mt-[14px] flex flex-col gap-[104px]'>
        <HiOutlineQuestionMarkCircle className='bg-transparent text-[#A3ADB2]' />
        <img className='w-[13px]' src={cube} alt='image of the cube' />
      </div>
      <div className='bg-transparent  w-[30vw] h-[49px]'>
        <div className='flex bg-transparent justify-between  items-center mt-[10px] ml-[12px] '>
          <div className='bg-[#171717] h-[44px] w-[110px] flex justify-center items-center rounded-[17px]'>
            <p className='bg-transparent text-white'>Gallery</p>
          </div>
          <div className='bg-transparent flex mr-[10%] '>
            <button
              className='h-[40px] w-[120px] z-30 bg-[#363C43] rounded-[46px]  shadow-[2px_3px_4px_2px_rgba(0,0,0,0.2)] text-white mr-[21px]'
              onClick={() => document.getElementById('imageInput').click()}
            >
              + ADD IMAGE
            </button>
            <input
              type='file'
              id='imageInput'
              style={{ display: 'none' }}
              onChange={handleAddImage}
            />
            <button
              onClick={handlePrev}
              className='bg-[#101213] mr-[21px] w-[40px] h-[40px] flex justify-center items-center rounded-[50%] shadow-[2px_3px_4px_2px_rgba(0,0,0,0.2)] '
            >
              <FaArrowLeftLong className='bg-transparent text-[#6F787C]' />
            </button>
            <button
              onClick={handleNext}
              className='bg-[#101213] mr-[21px] w-[40px] h-[40px] flex justify-center items-center rounded-[50%] shadow-[2px_3px_4px_2px_rgba(0,0,0,0.2)]'
            >
              <FaArrowRightLong className='bg-transparent text-[#6F787C]' />
            </button>
          </div>
        </div>
        <div className='bg-transparent flex  mt-[21px] items-center justify-between mx-[7%] '>
          {images.length > 0 ? (
            imagesToDisplay?.map((image, index) => {
              return (
                <img
                  className='w-[150px] h-[160px] rounded-[24px]'
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
