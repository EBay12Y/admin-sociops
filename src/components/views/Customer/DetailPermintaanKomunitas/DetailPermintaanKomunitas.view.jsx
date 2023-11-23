import { DefaultTemplate } from "@/components/template";
import { Button, ButtonBack } from "@/components/atoms";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const DetailPermintaanKomunitas = () => {
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-8'>
        <div className='flex items-center'>
          <div className='pr-4'>
            <ButtonBack />
          </div>
          <div className='font-medium text-2xl'>Lihat Permintaan Komunitas</div>
        </div>
        <div>
          <div className='rounded-[32px]'>
            <Image
              src='/pabrik-hyundai.png'
              alt='image detail komunitas'
              className='block mx-auto'
              width={1096}
              height={360}
            />
          </div>
        </div>
        {/* Judul */}
        <div className='font-semibold text-4xl'>Nama : Hyundai</div>
        {/* Tentang */}
        <div>
          <div className='font-semibold text-3xl mb-4'>Tentang Komunitas</div>
          <div className='text-justify text-xl'>
            Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
            mollis non. Integer pellentesque erat eu diam pharetra auctor id et
            nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
            lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque
            augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante.
            Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis
            Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
            mollis non. Integer pellentesque erat eu diam pharetra auctor id et
            nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
            lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque
            augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante.
            Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis
            Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
            mollis non. Integer pellentesque erat eu diam pharetra auctor id et
            nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
            lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque
            augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante.
            Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis{" "}
          </div>
        </div>
        <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl flex items-center flex-col w-[424px]'>
          <div className='mb-4 text-primary-700 font-semibold text-lg'>
            Proposal donasi
          </div>
          <div className='flex gap-2 items-center'>
            <div>
              <Button
                variant='primary-600'
                text='justdoit proposal.pdf'
                className='p-2 border-black border-2'
              />
            </div>
            <div>
              <Button
                variant='primary-600'
                text={<HiDownload size={24} className='text-white' />}
                className='p-[11px] border-black border-2'
              />
            </div>
          </div>
        </div>
        <div className='mt-8 flex justify-between gap-8'>
          <Button
            width='full'
            variant='primary-600'
            text='Ditolak'
            size='large'
          />
          <Button
            width='full'
            variant='primary-600'
            text='Disetujui'
            size='large'
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default DetailPermintaanKomunitas;
