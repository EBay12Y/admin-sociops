"use client";

import { useRouter } from "next/navigation";

import { HiArrowLeft } from "react-icons/hi";

const ButtonBack = () => {
  const router = useRouter();
  function handleBack() {
    router.back();
  }
  return (
    <button
      type='button'
      onClick={handleBack}
      className='rounded-full p-[16.5px] bg-primary-50 hover:scale-105 transition duration-200 ease-out'
    >
      <HiArrowLeft size={20} className='text-primary-600' />
    </button>
  );
};

export default ButtonBack;
