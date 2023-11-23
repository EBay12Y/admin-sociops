/* eslint-disable @next/next/no-img-element */
"use client";
import { DefaultTemplate } from "@/components/template";
import { Button, ButtonBack } from "@/components/atoms";
import useDetailFundraisingModel from "./DetailFundraising.organismModel";
import moment from "moment";
import Link from "next/link";

const DetailFundraising = ({ id }) => {
  const useModel = useDetailFundraisingModel({ id });
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
                useModel?.src && useModel?.isLink(useModel?.fundraising?.image)
                  ? useModel?.fundraising?.image
                  : "/exampleDetailFundraising.png"
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
          {useModel?.fundraising?.title}
        </div>
        {/* Keterangan */}
        <div>
          <div className='mb-6 grid grid-cols-3 gap-6 text-center'>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Organizer
              </div>
              <div className='text-xl'>
                {useModel?.fundraising?.organizer?.Name}
              </div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Target Donasi
              </div>
              <div className='text-xl'>
                {useModel?.fundraising?.target_donation}
              </div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Lokasi program
              </div>
              <div className='text-xl'>{useModel?.fundraising?.location}</div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6 text-center'>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Periode program
              </div>
              <div className='text-xl'>
                {moment(useModel?.fundraising?.start_date).format(
                  "D MMM YYYY",
                ) +
                  " - " +
                  moment(useModel?.fundraising?.end_date).format("D MMM YYYY")}
              </div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Hashtag
              </div>
              <div className='text-xl'>{useModel?.fundraising?.hashtag}</div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Kategori
              </div>
              <div className='text-xl'>
                {useModel?.fundraising?.category?.name}
              </div>
            </div>
          </div>
        </div>
        {/* Tentang */}
        <div>
          <div className='font-semibold text-3xl mb-4'>Tentang Campaign</div>
          <div className='text-justify text-xl'>
            {useModel?.fundraising?.description}{" "}
          </div>
        </div>
        {/* Cerita */}
        <div>
          <div className='font-semibold text-3xl mb-4'>Cerita Campaign</div>
          <div className='text-justify text-xl'>
            {useModel?.fundraising?.story}{" "}
          </div>
        </div>
        <div className='mb-6 flex justify-between gap-4 text-center'>
          <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl flex flex-col items-center w-[262px]'>
            <div className='mb-4 text-primary-700 font-semibold text-lg'>
              Target Penerima
            </div>
            <div className='text-xl'>
              {useModel?.fundraising?.target_recipient}
            </div>
          </div>
          <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl flex flex-col items-center'>
            <div className='mb-4 text-primary-700 font-semibold text-lg'>
              Proposal donasi
            </div>
            <div className='flex gap-2 items-center'>
              <div>
                <Link
                  href='https://sociops-backend-production.up.railway.app/asset/33'
                  target='_blank'
                >
                  <Button
                    variant='primary-600'
                    text='tekan untuk melihat proposal'
                    size='medium'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl flex flex-col items-center'>
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
        </div>
        {/* Donasi dengan Aksi */}
        <div>
          <div className='font-semibold text-4xl mb-8'>Donasi dengan aksi</div>
          <div className='font-semibold text-3xl mb-4'>
            Detail cara melakukan aksi
          </div>
          <div className='text-justify text-xl'>
            {useModel?.fundraising?.detail_action_donation}{" "}
          </div>
        </div>
        {/* Jumlah donasi */}
        <div>
          <div className='font-semibold text-3xl mb-4'>
            Jumlah donasi berdasarkan aksi
          </div>
          <div className='text-justify text-xl'>
            {useModel?.fundraising?.total_action_donation}
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

export default DetailFundraising;
