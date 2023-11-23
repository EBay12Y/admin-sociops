"use client";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import useStatisticOrganismModel from "./useStatistic.organismModel";

const Statistic = ({ variant }) => {
  const useModel = useStatisticOrganismModel(variant);
  return (
    <div className='drop-shadow-custom rounded-[15px] bg-Gray-50 p-5 w-[1105px] lg:w-full h-[330px]'>
      <div className='flex justify-between font-semibold mb-[21px] statistic'>
        <div className='text-lg'>{useModel.titleStatistic || "Statistic"}</div>
        <div className='text-[11px] pr-[39px]'>
          <a className='border-b-4 border-primary-600 pb-[9px] px-[10.3px]'>
            Bulan
          </a>
        </div>
      </div>
      <div className='flex gap-[38px] mb-5'>
        <div className='font-bold text-[28px]'>
          {useModel.dataStatistic.total}
        </div>
        <div className='flex items-center'>
          <BsFillArrowUpCircleFill
            size={20}
            className='text-primary-500 mr-[14px]'
          />
          <div>
            <div className='text-primary-500 text-[15px]'>
              {useModel.dataStatistic.total_persent}%
            </div>
            <div className='text-xs'>Than last Month</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[1047px] lg:w-full h-[151px]'>
          <Bar data={useModel.data} options={useModel.options} />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
