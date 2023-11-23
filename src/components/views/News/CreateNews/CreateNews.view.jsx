"use client";
import { DefaultTemplate } from "@/components/template";
import { Button, ButtonBack } from "@/components/atoms";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserToken } from "@/config/redux/user/userSelector";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { storage } from "@/config/firebase/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CreateNews = () => {
  const router = useRouter();
  const token = useUserToken();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handlePreviewClick = () => {
    const fileInput = document.getElementById("img");
    fileInput.click();
  };

  const initialValues = {
    title: "",
    description: "",
    img: null,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Judul berita harus diisi")
      .min(10, "Minimal 10 Karakter"),
    description: Yup.string()
      .required("Deskripsi berita harus diisi")
      .min(20, "Minimal 20 Karakter"),
    img: Yup.mixed().required("Gambar harus dipilih"),
  });

  const postData = async (newsData) => {
    try {
      const response = await axios.post(
        `${process.env.API_URL}/news`,
        newsData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const res = await response.data;
      const data = await res.data;
      return data;
    } catch (error) {
      toast("data belum tersimpan", { type: "error" });
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      const storageRef = ref(storage, `images/${values.img.name}`);
      await uploadBytes(storageRef, values.img);
      const imgUrl = await getDownloadURL(storageRef);

      // Mengirim data berita ke backend menggunakan axios
      const newsData = {
        title: values.title,
        description: values.description,
        photo_url: `${imgUrl}`,
      };

      postData(newsData);

      setSelectedImage(null);
      toast("data berhasil tersimpan", { type: "success" });
      router.push("/news");
    } catch (error) {
      toast("data belum tersimpan", { type: "error" });
    }
  };

  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[53px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Tulis berita</div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <Field name='img'>
            {({ field, form }) => (
              <div>
                {selectedImage ? (
                  <div
                    style={{ position: "relative", overflow: "hidden" }}
                    className='w-full h-[360px] object-cover object-center rounded-lg cursor-pointer'
                  >
                    <Image
                      src={selectedImage}
                      alt='Preview'
                      fill
                      objectFit='cover'
                      onClick={handlePreviewClick}
                    />
                  </div>
                ) : (
                  <div
                    className='flex items-center justify-center h-[360px] border border-gray-300 bg-gray-100 rounded-lg cursor-pointer'
                    onClick={handlePreviewClick}
                  >
                    <div className='flex flex-col items-center'>
                      <AiOutlinePlus size={40} />
                      <span className='text-center text-gray-500 font-bold'>
                        Tambah Gambar
                      </span>
                    </div>
                  </div>
                )}
                <input
                  type='file'
                  id='img'
                  accept='image/*'
                  onChange={(event) => {
                    form.setFieldValue(
                      field.name,
                      event.currentTarget.files[0],
                    );
                    handleImageChange(event);
                  }}
                  className='hidden'
                />
                <ErrorMessage
                  name={field.name}
                  component='div'
                  className='text-red-500 mb-2'
                />
              </div>
            )}
          </Field>
          <Field
            type='text'
            name='title'
            placeholder='Tuliskan Judul Berita . . .'
            className='block mt-8 w-full py-4 px-4 border border-gray-300 rounded-lg font-bold text-2xl'
          />
          <ErrorMessage
            name='title'
            component='div'
            className='text-red-500 mb-2'
          />
          <Field
            as='textarea'
            name='description'
            placeholder='Tuliskan Deskripsi Berita . . .'
            className='block mt-8 w-full py-4 px-4 border border-gray-300 rounded-lg'
            rows={15}
          />
          <ErrorMessage
            name='description'
            component='div'
            className='text-red-500 mb-2'
          />
          <div className='mt-8 flex justify-between gap-8'>
            <Button
              type='reset'
              width='full'
              variant='primary-600'
              text='Batalkan'
              size='large'
              onClick={() => {
                setSelectedImage(null);
                router.back();
              }}
            />
            <Button
              type='submit'
              width='full'
              variant='primary-600'
              text='Upload'
              size='large'
            />
          </div>
        </Form>
      </Formik>
    </DefaultTemplate>
  );
};

export default CreateNews;
