"use client";

import { ButtonBack, EmptyData, TableV2Row } from "@/components/atoms";
import { DefaultTemplate } from "@/components/template";
import ReactPaginate from "react-paginate";
import moment from "moment";
import newsImage from "../../../../../public/news.png";
import useListNewsModel from "./ListNews.viewModel";

const ListNews = () => {
  const useModel = useListNewsModel();

  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>List berita</div>
      </div>
      <div className='flex justify-center'>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <div className='w-[1096px] lg:w-full'>
            <div className='flex bg-error-400 rounded-xl p-5 text-center text-white mb-2.5 drop-shadow-custom'>
              <div className='w-[67px]'>No</div>
              <div className='w-[421px]'>Nama program</div>
              <div className='w-[400px]'>Deskripsi</div>
              <div className='w-[212px] flex-1'>Tanggal</div>
            </div>
            {useModel.loading ? (
              <div className='text-center flex justify-center w-full py-10'>
                <div
                  className='radial-progress animate-spin'
                  style={{ "--value": 70 }}
                ></div>
              </div>
            ) : useModel.listNews?.length !== 0 ? (
              useModel.listNews?.map((news, index) => {
                return (
                  <button
                    key={news?.id}
                    onClick={() => useModel.handleDetail(news?.id)}
                    className='w-full'
                  >
                    <TableV2Row
                      no={(useModel.currentPage + 1) * 5 - 5 + (index + 1)}
                      imgsrc={
                        useModel.src && useModel.isLink(news?.photo_url)
                          ? news?.photo_url
                          : newsImage
                      }
                      imgStyle='square'
                      nama={news?.title}
                      deskripsi={news?.description}
                      tanggal={moment(news?.created_at).format("D MMM YYYY")}
                      btnvariant='success-500'
                      onError={() => useModel.setSrc(false)}
                    />
                  </button>
                );
              })
            ) : (
              <EmptyData />
            )}
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
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default ListNews;
