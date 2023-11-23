"use client";

import { useRef } from "react";

const HeaderSearchInput = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.click();
  };

  return (
    <div className='md:flex hidden pl-8'>
      <label htmlFor='my_modal_10' ref={buttonRef} className=''>
        <input
          type='text'
          placeholder='Cari'
          onClick={handleClick}
          className='input input-bordered bg-gray-100 rounded-2xl w-[286px] h-12'
        />
      </label>
      <input type='checkbox' id='my_modal_10' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <div className='flex justify-end'>
            <label
              className='btn btn-circle btn-outline border-0 text-center'
              htmlFor='my_modal_10'
            >
              X
            </label>
          </div>
          <div className='flex justify-center mx-auto w-[400px] h-[400px]'>
            <iframe
              src='https://embed.lottiefiles.com/animation/94056'
              className='w-full h-full'
            />
          </div>
          <h3 className='text-2xl font-bold text-center'>Under Development</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchInput;
