const GallerySection = () => {
  return (
    <div className='bg-[#363C43] h-[29vh] w-[37%] mt-[5.5%] ml-[3%] z-30 rounded-[21px] overflow-y-auto flex'>
      <div>
        <div className='bg-transparent ml-[7px] mr-[2px] mt-[14px] flex flex-col gap-[104px]'>
          <HiOutlineQuestionMarkCircle className='bg-transparent text-[#A3ADB2]' />
          <img className='w-[13px]' src={cube} alt='image of the cube' />
        </div>
        <div>
          <div></div>
          <div>
            <button>+ ADD IMAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
