"use client";
import { ButtonBigIcon, ProgramItem } from "@/components/atoms";
import { NewProgram } from "@/components/molecules";
import { Statistic } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import { FaClipboardList, FaUserCheck, FaUserPlus } from "react-icons/fa";
import { useUserToken } from "@/config/redux/user/userSelector";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import moment from "moment";

const DashboardVolunteer = () => {
  const token = useUserToken();
  const [dataPengajuanProgram, setDataPengajuanProgram] = useState([]);
  const [dataProgramTerbaru, setDataProgramTerbaru] = useState([]);
  const fetchData = useCallback(
    async (data) => {
      try {
        const req = await axios.get(`${process.env.API_URL}/campaigns`, {
          params: {
            page: 1,
            page_size: 4,
            type: "VOLUNTEER",
            status: `${data === "Pengajuan Program" ? "PENDING" : "ACCEPTED"}`,
            sort: "created_at_desc",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const response = await req.data;
        const resData = await response.data;
        if (data === "Pengajuan Program") {
          setDataPengajuanProgram(resData);
        } else {
          setDataProgramTerbaru(resData);
        }
        return data;
      } catch (error) {
        throw error;
      }
    },
    [token],
  );
  useEffect(() => {
    fetchData("Pengajuan Program");
    fetchData("Program Terbaru");
  }, [fetchData]);
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-[30px]'>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <div className='grid grid-cols-3 gap-[25px] text-Gray-800 w-[1105px] lg:w-full'>
            <ButtonBigIcon
              icon={
                <FaUserPlus
                  size={100}
                  className='text-blue-gray-600 mx-auto mb-3 group-hover:text-Gray-50'
                />
              }
              title='Permintaan Pengajuan Program'
              link='/volunteer/pengajuan-program'
            />
            <ButtonBigIcon
              icon={
                <FaClipboardList
                  size={100}
                  className='text-blue-gray-600 mx-auto mb-3 group-hover:text-primary-600'
                />
              }
              title='List Program'
              link='/volunteer/list-program'
            />
            <ButtonBigIcon
              icon={
                <FaUserCheck
                  size={100}
                  className='text-blue-gray-600 mx-auto mb-3'
                />
              }
              title='Riwayat Program'
              link='/volunteer/riwayat-program'
            />
          </div>
        </div>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <Statistic variant='volunteer' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <NewProgram title='Permintan Program Baru'>
            {dataPengajuanProgram?.map((item, index) => {
              return (
                <ProgramItem
                  title={item?.title}
                  deskripsi={`${moment(item?.start_date).format(
                    "DD MMMM YYYY",
                  )} - ${moment(item?.end_date).format("DD MMMM YYYY")}`}
                  nomor={index + 1}
                  variant='netral'
                  key={item.id}
                />
              );
            })}
          </NewProgram>
          <NewProgram title='Program Baru'>
            {dataProgramTerbaru?.map((item, index) => {
              return (
                <ProgramItem
                  title={item?.title}
                  deskripsi={`${moment(item?.start_date).format(
                    "DD MMMM YYYY",
                  )} - ${moment(item?.end_date).format("DD MMMM YYYY")}`}
                  nomor={index + 1}
                  variant='netral'
                  key={item.id}
                />
              );
            })}
          </NewProgram>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default DashboardVolunteer;
