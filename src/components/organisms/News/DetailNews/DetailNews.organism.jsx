/* eslint-disable @next/next/no-img-element */
"use client";

import { DefaultTemplate } from "@/components/template";
import { ButtonBack } from "@/components/atoms";
import useDetailNewsModel from "./DetailNews.organismModel";
import moment from "moment";

const DetailNews = ({ id }) => {
  const useModel = useDetailNewsModel({ id });

  const time = moment(useModel.news.created_at);
  const formatTime = time.format("DD MMMM YYYY");

  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[53px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Lihat berita</div>
      </div>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className='w-full h-[360px] object-cover object-center rounded-lg'
      >
        <img
          src={
            useModel.src && useModel.isLink(useModel.news.photo_url)
              ? useModel.news.photo_url
              : "/news.png"
          }
          alt='image detail news'
          className='block mx-auto'
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          onError={() => useModel.setSrc(false)}
        />
      </div>
      <div className='font-bold text-4xl mt-[32px]'>{useModel.news.title}</div>
      <div className='text-lg mt-[32px] mb-[16px]'>
        By : {useModel.news.author}
      </div>
      <div className='text-lg mb-[16px] font-light'>{formatTime}</div>
      <p className='text-xl text-justify'>{useModel.news.description}</p>
    </DefaultTemplate>
  );
};

export default DetailNews;
