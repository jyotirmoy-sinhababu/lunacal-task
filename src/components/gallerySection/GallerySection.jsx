import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import cube from '../../../public/cube.svg';

import { useState } from 'react';

const GallerySection = () => {
  const [images, setImages] = useState([]);
  console.log(images);

  const handleAddImage = (event) => {
    const file = event.target.files[0]; // get the selected file
    const reader = new FileReader(); // create a new FileReader instance
    reader.onload = () => {
      const imageData = reader.result; // get the image data
      setImages((prevImages) => [...prevImages, imageData]); // add the new image to the state
    };
    reader.readAsDataURL(file); // read the file as a data URL
  };

  return (
    <div className='bg-[#363C43] h-[29vh] min-w-[37%] mt-[5.5%] ml-[3%] z-30 rounded-[21px] overflow-y-auto flex'>
      <div className='flex bg-transparent'>
        <div className='bg-transparent ml-[7px] mr-[2px] mt-[14px] flex flex-col gap-[104px]'>
          <HiOutlineQuestionMarkCircle className='bg-transparent text-[#A3ADB2]' />
          <img className='w-[13px]' src={cube} alt='image of the cube' />
        </div>
        <div className='flex bg-transparent'>
          <div className='bg-transparent'>
            <p className='bg-transparent'>Gallery</p>
          </div>
          <div className='bg-transparent'>
            <button
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
            <button className='bg-transparent'>
              <FaArrowLeftLong />
            </button>
            <button className='bg-transparent'>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
