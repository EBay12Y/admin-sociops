"use client";
import {
  Button,
  ButtonBack,
  EmptyData,
  Loading,
  TableV1Row,
} from "@/components/atoms";
import { TableV1 } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import moment from "moment";
import ReactPaginate from "react-paginate";
import usePengajuanProgramModel from "./PengajuanProgramVolunteer.viewMode";

const PengajuanProgramVolunteer = () => {
  const useModel = usePengajuanProgramModel();

  return (
    <DefaultTemplate>
      <div className='mb-[7px] pb-4 flex items-center'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='font-medium text-2xl'>Permintaan Pengajuan Program</div>
      </div>
      <div className='pt-4 overflow-x-scroll md:overflow-auto'>
        <TableV1
          variant='primary'
          header1='No'
          header2='Nama Program'
          header3='Deskripsi'
          header4='Tanggal diajukan'
          header5='Detail'
        >
          {useModel.loading ? (
            <Loading />
          ) : useModel.pengajuanProgram?.length !== 0 ? (
            useModel.pengajuanProgram?.map((volunteer, index) => (
              <TableV1Row
                key={volunteer?.id}
                variant='primary'
                no={(useModel.currentPage + 1) * 5 - 5 + (index + 1)}
                nama={volunteer?.title}
                deskripsi={volunteer?.description}
                tanggal={moment(volunteer?.created_at).format("D MMM YYYY")}
                button={
                  <Button
                    text='Lihat Detail'
                    variant='blue-gray-600'
                    width='w-full'
                    fontSize='medium'
                    size='medium'
                    onClick={() => useModel.handleDetail(volunteer?.id)}
                  />
                }
              />
            ))
          ) : (
            <EmptyData />
          )}
        </TableV1>
        <div className='flex justify-center mt-4'>
          <ReactPaginate
            pageCount={useModel.pageCount} // Jumlah total halaman
            pageRangeDisplayed={3} // Jumlah halaman yang ditampilkan
            marginPagesDisplayed={2} // Jumlah halaman di sekitar halaman aktif yang ditampilkan
            onPageChange={useModel.handlePaginate} // Fungsi yang dipanggil saat halaman berubah
            containerClassName='join'
            activeClassName='btn-active'
            nextLabel='>>'
            previousLabel='<<'
            pageClassName='join-item btn btn-square btn-outline'
            pageLinkClassName='w-full h-full flex justify-center items-center'
            previousClassName='join-item btn btn-square btn-outline'
            previousLinkClassName='w-full h-full flex justify-center items-center'
            nextClassName='join-item btn btn-square btn-outline'
            nextLinkClassName='w-full h-full flex justify-center items-center'
            breakLabel='...'
            breakClassName='join-item btn btn-square btn-outline'
            breakLinkClassName='w-full h-full flex justify-center items-center'
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default PengajuanProgramVolunteer;
