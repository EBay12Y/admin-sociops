/* eslint-disable @next/next/no-img-element */
"use client";

import { DefaultTemplate } from "@/components/template";
import { Button, ButtonBack } from "@/components/atoms";
import moment from "moment";
import useDetailVolunteerModel from "./DetailVolunteer.organismModel";
import Link from "next/link";

const DetailVolunteer = ({ id }) => {
  const useModel = useDetailVolunteerModel({ id });
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-8'>
        <div className='flex items-center'>
          <div className='pr-4'>
            <ButtonBack />
          </div>
          <div className='font-medium text-2xl'>Detail Program</div>
        </div>
        <div>
          <div
            style={{ position: "relative", overflow: "hidden" }}
            className='w-full h-[360px] object-cover object-center rounded-lg'
          >
            <img
              src={
                useModel?.src && useModel?.isLink(useModel?.volunteer?.image)
                  ? useModel?.volunteer?.image
                  : "/exampleDetailProgram.png"
              }
              alt='image detail program'
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
        </div>
        {/* Judul */}
        <div className='font-semibold text-4xl'>
          {useModel?.volunteer?.title}
        </div>
        {/* Keterangan */}
        <div>
          <div className='mb-6 grid grid-cols-2 gap-6 text-center'>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Organizer
              </div>
              <div className='text-xl'>
                {useModel?.volunteer?.organizer?.Name}
              </div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Lokasi program
              </div>
              <div className='text-xl'>{useModel?.volunteer?.location}</div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6 text-center'>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Periode program
              </div>
              <div className='text-xl'>
                {moment(useModel?.volunteer?.start_date).format("D MMM YYYY") +
                  " - " +
                  moment(useModel?.volunteer?.end_date).format("D MMM YYYY")}
              </div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Hashtag
              </div>
              <div className='text-xl'>{useModel?.volunteer?.hashtag}</div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Kategori
              </div>
              <div className='text-xl'>
                {useModel?.volunteer?.category?.name}
              </div>
            </div>
          </div>
        </div>
        {/* Tentang */}
        <div>
          <div className='font-semibold text-3xl mb-4'>Tentang Campaign</div>
          <div className='text-justify text-xl'>
            {useModel?.volunteer?.description}{" "}
          </div>
        </div>
        <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl flex items-center flex-col w-[424px]'>
          <div className='mb-4 text-primary-700 font-semibold text-lg'>
            Video Promosi
          </div>
          <div className='flex gap-2 items-center'>
            <Link href='https://youtu.be/giqJjp_Zi7Y' target='_blank'>
              <Button
                variant='primary-600'
                text='tekan untuk melihat video'
                size='medium'
              />
            </Link>
          </div>
        </div>
        <div className='mt-8 flex justify-between gap-8'>
          <Button
            width='full'
            variant='primary-600'
            text='Ditolak'
            size='large'
            onClick={() => useModel.handleUpdateRejected()}
          />
          <Button
            width='full'
            variant='primary-600'
            text='Diterima'
            size='large'
            onClick={() => useModel.handleUpdateAccepted()}
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default DetailVolunteer;
