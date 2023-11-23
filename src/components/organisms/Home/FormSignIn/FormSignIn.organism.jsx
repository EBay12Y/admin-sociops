"use client";

import { Button, InputText } from "@/components/atoms";
import useFormSignInModel from "./FormSignIn.organismModel";
import { useEffect, useRef } from "react";

const FormSignIn = () => {
  const useModel = useFormSignInModel();
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.click();
  }, []);
  return (
    <div className='bg-primary-200 min-h-screen flex justify-center items-center px-4'>
      <label htmlFor='my_modal_7' ref={buttonRef} className='btn hidden'>
        open modal
      </label>
      <input type='checkbox' id='my_modal_7' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <div className='flex justify-end'>
            <label
              className='btn btn-circle btn-outline border-0 text-center z-10'
              htmlFor='my_modal_7'
            >
              X
            </label>
          </div>
          <h3 className='text-2xl md:text-3xl font-bold text-center'>
            Perhatian
          </h3>
          <div className='flex justify-center mx-auto md:w-[350px] md:h-[350px]'>
            <iframe
              src='https://embed.lottiefiles.com/animation/89275'
              className='w-full h-full'
            ></iframe>
          </div>
          <p className=''>
            Silakan login menggunakan akun yang telah disediakan. Kami
            merekomendasikan untuk mengakses website ini menggunakan laptop atau
            komputer agar dapat menikmati tampilan penuh. Harap menggunakan
            website showcase ini dengan bijak.
          </p>
          <p className='text-center'>Terima kasih.</p>
        </div>
      </div>
      <div className='max-w-[560px] w-full bg-primary-500 rounded-xl md:rounded-[48px] px-6 pb-6 pt-11 flex flex-col items-center'>
        <div className='text-4xl md:text-5xl mb-2 text-white'>Login</div>
        <div className='text-base md:text-xl mb-8 text-white'>
          Please enter your details
        </div>
        <form onSubmit={useModel.formik.handleSubmit}>
          <div className='mb-4'>
            <InputText
              type='text'
              placeholder='Email'
              variant='text'
              name='email'
              value={useModel.formik.values.email}
              onChange={useModel.formik.handleChange}
            />
            {useModel.formik.errors.email && useModel.formik.touched.email && (
              <small className='ml-4 error text-red-700'>
                {useModel.formik.errors.email}
              </small>
            )}
          </div>
          <div className='mb-10'>
            <InputText
              type='password'
              placeholder='Password'
              variant='password'
              name='password'
              value={useModel.formik.values.password}
              onChange={useModel.formik.handleChange}
            />
            {useModel.formik.errors.password &&
              useModel.formik.touched.password && (
                <small className='ml-4 error text-red-700'>
                  {useModel.formik.errors.password}
                </small>
              )}
          </div>
          <div className='w-full'>
            <Button
              type='submit'
              text='Login'
              variant='primary-800'
              width='full'
              size='large'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignIn;
