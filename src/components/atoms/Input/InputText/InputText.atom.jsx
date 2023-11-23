"use client";

// import { useState } from "react";
// import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const InputText = ({ onChange, value, name, placeholder, type, variant }) => {
  // const [isShow, setIsShow] = useState(false);

  return variant === "text" ? (
    <input
      className='w-[275px] md:w-[432px] h-[72px] ps-8 pe-16 py-6 placeholder:capitalize rounded-[72px] text-base border-2 border-primary-300 bg-primary-700 placeholder:text-white text-white'
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  ) : (
    <div className='relative'>
      {/* <button
        className='absolute right-0 top-0 bottom-0 me-8 flex items-center'
        onClick={() => setIsShow(!isShow)}
        type='button'
      >
        {!isShow ? (
          <BsEyeSlashFill size={24} className='text-white' />
        ) : (
          <BsEyeFill size={24} className='text-white' />
        )}
      </button> */}
      <input
        className='w-[275px] md:w-[432px] h-[72px] ps-8 pe-16 py-6 placeholder:capitalize rounded-[72px] text-base border-2 border-primary-300 bg-primary-700 placeholder:text-white text-white'
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        type={"password"}
      />
    </div>
  );
};

export default InputText;
