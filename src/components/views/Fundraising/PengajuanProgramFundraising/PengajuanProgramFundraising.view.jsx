"use client";
import { Button, ButtonBack, Loading, TableV1Row } from "@/components/atoms";
import { TableV1 } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import moment from "moment";
import ReactPaginate from "react-paginate";
import usePengajuanProgramFundraisingModel from "./PengajuanProgramFundraising.viewModel";

const PengajuanProgramFundraising = () => {
  const useModel = usePengajuanProgramFundraisingModel();

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
          variant='warning'
          header1='No'
          header2='Nama Program'
          header3='Deskripsi'
          header4='Tanggal diajukan'
          header5='Detail'
        >
          <>
            {useModel.loading ? (
              <Loading />
            ) : useModel.pengajuan?.length !== 0 ? (
              useModel.pengajuan?.map((fundraising, index) => (
                <TableV1Row
                  key={fundraising?.id}
                  variant='warning'
                  no={(useModel.currentPage + 1) * 5 - 5 + (index + 1)}
                  nama={fundraising?.title}
                  deskripsi={fundraising?.description}
                  tanggal={moment(fundraising?.created_at).format("D MMM YYYY")}
                  button={
                    <Button
                      text='Lihat Detail'
                      variant='warning-400'
                      fontSize='medium'
                      size='medium'
                      width={"w-full"}
                      onClick={() => useModel.handleDetail(fundraising?.id)}
                    />
                  }
                />
              ))
            ) : (
              <td colSpan={5} className='capitalize text-center py-10 text-lg'>
                data tidak ada
              </td>
            )}
          </>
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

export default PengajuanProgramFundraising;
