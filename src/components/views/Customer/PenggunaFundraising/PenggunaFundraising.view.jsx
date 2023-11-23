/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Button,
  ButtonBack,
  Loading,
  TableV3Cell,
  TableV3Header,
  TableV3Row,
} from "@/components/atoms";
import { TableV3 } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import {
  usePenggunaFundraising,
  usePenggunaFundraisingType,
  useUserToken,
} from "@/config/redux/user/userSelector";
import { retrievePenggunaFundraising } from "@/config/redux/user/userThunk";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

const PenggunaFundraising = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const PenggunaFundraising = usePenggunaFundraising();
  const type = usePenggunaFundraisingType();
  const currentDate = new Date();

  const loading = type === retrievePenggunaFundraising.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = 10;

  const isLink = (str) => {
    return (
      typeof str === "string" &&
      (str.startsWith("http://") || str.startsWith("https://"))
    );
  };

  useEffect(() => {
    dispatch(retrievePenggunaFundraising({ currentPage, token }));
  }, [dispatch, token, currentPage]);
  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Pengguna Fundraising</div>
      </div>
      <div>
        <TableV3
          header={
            <>
              <TableV3Header title='No' className='w-[5%]' />
              <TableV3Header
                title='Nama Pengguna'
                className='w-[27%] text-left'
              />
              <TableV3Header title='Program' className='w-[33%] text-left' />
              <TableV3Header title='Periode' className='w-[20%] text-left' />
              <TableV3Header title='Status' className='w-[15%]' />
            </>
          }
        >
          {loading ? (
            <Loading />
          ) : PenggunaFundraising?.length !== 0 ? (
            PenggunaFundraising?.map((user, index) => {
              const formatedEndDate = new Date(user?.campaign?.end_date);
              return (
                <TableV3Row key={index}>
                  <TableV3Cell className='font-semibold'>
                    <div className='text-center'>
                      {(currentPage + 1) * 5 - 5 + (index + 1)}
                    </div>
                  </TableV3Cell>
                  <TableV3Cell>
                    <div className='flex items-center'>
                      <div>
                        <Image
                          alt='profile image'
                          src={
                            user && isLink(user?.photo_url)
                              ? user?.photo_url
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
                          {user?.Name}
                        </div>
                      </div>
                    </div>
                  </TableV3Cell>
                  <TableV3Cell>
                    <div className='line-clamp-3'>{user?.campaign?.title}</div>
                  </TableV3Cell>
                  <TableV3Cell>
                    <div>
                      {moment(user?.campaign?.start_date).format("D MMM YYYY") +
                        " - " +
                        moment(user?.campaign?.end_date).format("D MMM YYYY")}
                    </div>
                  </TableV3Cell>
                  <TableV3Cell>
                    <div className='flex justify-center'>
                      {formatedEndDate > currentDate ? (
                        <Button
                          variant='success-600'
                          text='Aktif'
                          size={"medium"}
                        />
                      ) : (
                        <Button
                          variant='error-600'
                          text='Nonaktif'
                          size={"medium"}
                        />
                      )}
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

export default PenggunaFundraising;
