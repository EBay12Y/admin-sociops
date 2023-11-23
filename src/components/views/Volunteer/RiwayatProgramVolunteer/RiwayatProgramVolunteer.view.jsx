"use client";

import { DefaultTemplate } from "@/components/template";
import { TableV1 } from "@/components/organisms";
import { Button, ButtonBack, TableV1Row } from "@/components/atoms";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { retrieveRiwayatProgramVolunteer } from "@/config/redux/volunteer/volunteerThunk";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  useRiwayatProgramVolunteer,
  useRiwayatProgramVolunteerType,
} from "@/config/redux/volunteer/volunteerSelector";
import moment from "moment";

const RiwayatProgram = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const riwayatVolunter = useRiwayatProgramVolunteer();
  const type = useRiwayatProgramVolunteerType();

  const loading = type === retrieveRiwayatProgramVolunteer.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = 10;

  useEffect(() => {
    dispatch(retrieveRiwayatProgramVolunteer({ currentPage, token }));
  }, [dispatch, token, currentPage]);
  return (
    <DefaultTemplate>
      <div className='mb-[7px] pb-4 flex items-center'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='font-medium text-2xl'>Riwayat Program</div>
      </div>
      <div className='pt-4 overflow-x-scroll md:overflow-auto'>
        <TableV1
          variant='primary'
          header1='No'
          header2='Nama program'
          header3='Deskripsi'
          header4='Tanggal'
          header5='Status'
        >
          <>
            {loading ? (
              <td colSpan={5} className='py-10 text-center'>
                <div
                  className='radial-progress animate-spin'
                  style={{ "--value": 70 }}
                ></div>
              </td>
            ) : riwayatVolunter?.length !== 0 ? (
              riwayatVolunter?.map((riwayat, idx) => {
                return (
                  <TableV1Row
                    key={idx}
                    variant='primary'
                    no={(currentPage + 1) * 5 - 5 + (idx + 1)}
                    nama={riwayat?.title}
                    deskripsi={riwayat?.description}
                    tanggal={moment(riwayat?.created_at).format("D MMM YYYY")}
                    button={
                      <Button
                        text={
                          riwayat?.status === "REJECTED"
                            ? "ditolak"
                            : "disetujui"
                        }
                        variant={
                          riwayat?.status === "REJECTED"
                            ? "error-600"
                            : "success-600"
                        }
                        width='full'
                        fontSize='medium'
                        size='medium'
                      />
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
        </TableV1>

        <div className='flex justify-center mt-4'>
          <ReactPaginate
            pageCount={pageCount} // Jumlah total halaman
            pageRangeDisplayed={3} // Jumlah halaman yang ditampilkan
            marginPagesDisplayed={2} // Jumlah halaman di sekitar halaman aktif yang ditampilkan
            onPageChange={handlePaginate} // Fungsi yang dipanggil saat halaman berubah
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

export default RiwayatProgram;
