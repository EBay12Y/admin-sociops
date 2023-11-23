"use client";

import {
  ButtonBack,
  TableV3Cell,
  TableV3Header,
  TableV3Row,
} from "@/components/atoms";
import { TableV3 } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import Image from "next/image";
import useDaftarAkunPengguna from "./DaftarAkunPengguna.viewModel";
import ReactPaginate from "react-paginate";

const DaftarAkunPengguna = () => {
  const useModel = useDaftarAkunPengguna();

  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Daftar Akun Pengguna</div>
      </div>
      <div>
        <TableV3
          className='w-full'
          header={
            <>
              <TableV3Header title='No' className='w-[10%]' />
              <TableV3Header title='Nama Pengguna' className='text-left' />
            </>
          }
        >
          {useModel.loading ? (
            <td colSpan={5} className='py-10 text-center'>
              <div
                className='radial-progress animate-spin'
                style={{ "--value": 70 }}
              ></div>
            </td>
          ) : useModel.pengguna?.length !== 0 ? (
            useModel.pengguna?.map((daftar, idx) => {
              return (
                <TableV3Row key={idx}>
                  <TableV3Cell className='text-center font-semibold'>
                    {(useModel.currentPage + 1) * 5 - 5 + (idx + 1)}
                  </TableV3Cell>
                  <TableV3Cell className='flex items-center'>
                    <div>
                      <Image
                        alt='profile image'
                        src={
                          daftar?.PhotoURL.length !== 0
                            ? daftar?.PhotoURL
                            : "/exampleProfile.png"
                        }
                        width={40}
                        height={40}
                        placeholder='blur'
                        blurDataURL={
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=="
                        }
                        className='rounded-[15px] object-top mr-[35px]'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <div className='text-sm font-medium text-Gray-800'>
                        {daftar?.Name}
                      </div>
                    </div>
                  </TableV3Cell>
                </TableV3Row>
              );
            })
          ) : (
            <td colSpan={5} className='capitalize text-center py-10 text-lg'>
              data tidak ada
            </td>
          )}
        </TableV3>

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

export default DaftarAkunPengguna;
