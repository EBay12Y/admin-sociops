/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "..";

const TableV2Row = ({
  no,
  nama,
  comunity,
  comunitydesc,
  deskripsi,
  tanggal,
  imgStyle,
  imgsrc,
  btnvariant,
  onError,
}) => {
  return (
    <div className='flex rounded-xl p-5 text-center drop-shadow-custom bg-Gray-25 mb-2.5'>
      <div className='w-[67px] p-[18.5px] flex items-center'>{no}</div>
      <div className='w-[421px] flex'>
        {imgStyle === "circle" ||
        imgStyle === null ||
        imgStyle === undefined ? (
          <div>
            <Image
              className='rounded-full object-cover object-center'
              src={imgsrc}
              alt='news'
              width={124}
              height={124}
              onError={onError}
              placeholder='blur'
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=="
              }
            />
          </div>
        ) : null}
        {imgStyle === "square" ? (
          <div className='relative w-[124px] h-[106px]'>
            <Image
              className='rounded-[20px] object-cover object-center'
              src={imgsrc}
              alt='news'
              fill={true}
              onError={onError}
              placeholder='blur'
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=="
              }
            />
          </div>
        ) : null}
        <div className='justify-center p-[23px]'>
          <div className='line-clamp-1'>
            <p className='text-justify font-medium text-base'>{nama}</p>
          </div>
          <p className='text-justify font-medium text-3xl'>{comunity}</p>
          <p className='text-justify font-light text-lg'>{comunitydesc}</p>
        </div>
      </div>
      <div className='w-[400px] text-justify font-normal text-base flex items-center'>
        <div className='line-clamp-3'>{deskripsi}</div>
      </div>
      <div className='p-[18.5px] flex flex-1 justify-center items-center'>
        <Button variant={btnvariant} text={tanggal} size='detail-button' />
      </div>
    </div>
  );
};

export default TableV2Row;
