"use client";
import { DefaultTemplate } from "@/components/template";
import { TableV1 } from "@/components/organisms";
import { ButtonBack, EmptyData, Loading, TableV1Row } from "@/components/atoms";
import moment from "moment";
import ReactPaginate from "react-paginate";
import useListProgramFundraisingModel from "../../Fundraising/ListProgramFundraising/ListProgramFundraising.viewModel";

const ListProgramVolunteer = () => {
  const useModel = useListProgramFundraisingModel();

  return (
    <DefaultTemplate>
      <div className='mb-[7px] pb-4 flex items-center'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='font-medium text-2xl'>List Program</div>
      </div>
      <div className='pt-4 overflow-x-scroll md:overflow-auto'>
        <TableV1
          variant='primary'
          header1='No'
          header2='Nama program'
          header3='Deskripsi'
          header4='Tanggal'
          header5='Lokasi'
        >
          {useModel.loading ? (
            <Loading />
          ) : useModel.program?.length !== 0 ? (
            useModel.program?.map((volunteer, index) => (
              <TableV1Row
                key={volunteer?.id}
                variant='primary'
                no={(useModel.currentPage + 1) * 5 - 5 + (index + 1)}
                nama={volunteer?.title}
                deskripsi={volunteer?.description}
                tanggal={
                  moment(volunteer?.start_date).format("D MMM YYYY") +
                  " - " +
                  moment(volunteer?.end_date).format("D MMM YYYY")
                }
                button={volunteer?.location}
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

export default ListProgramVolunteer;
