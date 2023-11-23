import { ButtonBack } from "@/components/atoms";

const page = () => {
  return (
    <>
      <div className='my-5 mx-8 absolute z-10 font-bold items-center flex'>
        <ButtonBack /> &nbsp; Kembali
      </div>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <iframe
          src='https://embed.lottiefiles.com/animation/120952'
          className='w-full h-full'
          title='Lottie Animation'
        ></iframe>
      </div>
    </>
  );
};

export default page;
