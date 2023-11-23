import { DefaultTemplate } from "@/components/template";
import {
  FaArchive,
  FaChalkboardTeacher,
  FaCoins,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { ButtonBigIcon } from "@/components/atoms";
import { Statistic } from "@/components/organisms";

const Dashboard = () => {
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-[30px]'>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <div className='grid grid-cols-4 gap-[25px] text-Gray-800 w-[1105px] lg:w-full'>
            <ButtonBigIcon
              icon={
                <FaChalkboardTeacher
                  size={100}
                  className='text-primary-600 mx-auto mb-3 group-hover:text-Gray-50'
                />
              }
              title='Customers'
              link='/customer'
            />
            <ButtonBigIcon
              icon={
                <FaCoins
                  size={100}
                  className='text-warning-400 mx-auto mb-3 group-hover:text-primary-600'
                />
              }
              title='Fundraising'
              link='/fundraising'
            />
            <ButtonBigIcon
              icon={
                <FaHandHoldingHeart
                  size={100}
                  className='text-blue-gray-600 mx-auto mb-3'
                />
              }
              title='Volunteer'
              link='/volunteer'
            />
            <ButtonBigIcon
              icon={
                <FaArchive size={100} className='text-error-400 mx-auto mb-3' />
              }
              link='/news'
              title='News'
            />
          </div>
        </div>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <Statistic variant='customer' />
        </div>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <Statistic variant='volunteer' />
        </div>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <Statistic variant='fundraising' />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Dashboard;
