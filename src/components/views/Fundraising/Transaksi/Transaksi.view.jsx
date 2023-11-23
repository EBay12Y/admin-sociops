"use client";

import { DefaultTemplate } from "@/components/template";
import { Button, ButtonBack, Loading } from "@/components/atoms";
import TableV4 from "@/components/organisms/TableV4/TableV4.organism";
import TableV4Row from "@/components/atoms/TableV4/TableV4Row.atom";
import ReactPaginate from "react-paginate";
import moment from "moment";
import useTransaksiModel from "./Transaksi.viewModel";

const Transaksi = () => {
  const useModel = useTransaksiModel();

  return (
    <DefaultTemplate>
      <div className='mb-[7px] pb-4 flex items-center'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='font-medium text-2xl'>Transaksi</div>
      </div>
      <div className='pt-4 overflow-x-scroll md:overflow-auto'>
        <TableV4
          variant='warning'
          header1='No'
          header2='Program'
          header3='Customer'
          header4='ID Transaksi'
          header5='Tanggal Transaksi'
          header6='Status'
        >
          <>
            {useModel.loading ? (
              <Loading />
            ) : useModel.transaksi?.length !== 0 ? (
              useModel.transaksi?.map((item, index) => {
                return (
                  <TableV4Row
                    key={item.id}
                    variant='warning'
                    no={(useModel.currentPage + 1) * 5 - 5 + (index + 1)}
                    program={item?.campaign?.title}
                    customer={item?.user?.Name}
                    id={item?.id}
                    tanggal={moment(item?.created_at).format("DD MMMM YYYY")}
                    button={
                      <>
                        {item?.status === "ACCEPTED" ? (
                          <Button
                            text='Berhasil'
                            variant='success-600'
                            width='w-full'
                            fontSize='medium'
                            size='medium'
                          />
                        ) : null}
                        {item?.status === "PENDING" ? (
                          <Button
                            text='Menunggu'
                            variant='warning-600'
                            width='w-full'
                            fontSize='medium'
                            size='medium'
                          />
                        ) : null}
                        {item?.status === "REJECTED" ? (
                          <Button
                            text='Gagal'
                            variant='error-600'
                            width='w-full'
                            fontSize='medium'
                            size='medium'
                          />
                        ) : null}
                      </>
                    }
                  />
                );
              })
            ) : (
              <td colSpan={5} className='capitalize text-center py-10 text-lg'>
                data tidak ada
              </td>
            )}
          </>
        </TableV4>
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

export default Transaksi;
