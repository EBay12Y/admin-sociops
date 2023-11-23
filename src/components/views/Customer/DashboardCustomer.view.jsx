/* eslint-disable @next/next/no-img-element */
"use client";
import { ButtonBigIcon, Loading, ProgramItem } from "@/components/atoms";
import { NewProgram } from "@/components/molecules";
import { Statistic } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import {
  useRecentFundraisingUser,
  useRecentUser,
  useRecentVolunteerUser,
  useTypeRecentFundraisingUser,
  useTypeRecentUser,
  useTypeRecentVolunteerUser,
  useUserToken,
} from "@/config/redux/user/userSelector";
import {
  retrieveRecentFundraisingUser,
  retrieveRecentUser,
  retrieveRecentVolunteerUser,
} from "@/config/redux/user/userThunk";
import Image from "next/image";
import { useEffect } from "react";
import { useCallback } from "react";
import {
  FaClipboardList,
  FaUserFriends,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { useDispatch } from "react-redux";

const DashboardCustomer = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const typeRecentUser = useTypeRecentUser();
  const typeRecentFundraisingUser = useTypeRecentFundraisingUser();
  const typeRecentVolunteerUser = useTypeRecentVolunteerUser();
  const recentUser = useRecentUser();
  const recentFundraisingUser = useRecentFundraisingUser();
  const recentVolunteerUser = useRecentVolunteerUser();
  const loadingRecentUser = typeRecentUser === retrieveRecentUser.pending.type;
  const loadingRecentFundraisingUser =
    typeRecentFundraisingUser === retrieveRecentFundraisingUser.pending.type;
  const loadingRecentVolunteerUser =
    typeRecentVolunteerUser === retrieveRecentVolunteerUser.pending.type;

  const fetchData = useCallback(() => {
    dispatch(retrieveRecentUser({ token }));
    dispatch(retrieveRecentFundraisingUser({ token }));
    dispatch(retrieveRecentVolunteerUser({ token }));
  }, [dispatch, token]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const isLink = (str) => {
    return (
      typeof str === "string" &&
      (str.startsWith("http://") || str.startsWith("https://"))
    );
  };
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-[30px]'>
        <div className='grid grid-cols-4 gap-[25px] text-Gray-800'>
          <ButtonBigIcon
            icon={
              <FaUserPlus
                size={100}
                className='text-primary-600 mx-auto mb-3 group-hover:text-Gray-50'
              />
            }
            title='Permintaan Komunitas'
            link='/customer/permintaan-komunitas'
          />
          <ButtonBigIcon
            icon={
              <FaClipboardList
                size={100}
                className='text-primary-600 mx-auto mb-3 group-hover:text-primary-600'
              />
            }
            title='Daftar Akun Pengguna'
            link='/customer/daftar-akun-pengguna'
          />
          <ButtonBigIcon
            icon={
              <FaUsers size={100} className='text-primary-600 mx-auto mb-3' />
            }
            title='Pengguna Fundraising'
            link='/customer/pengguna-fundraising'
          />
          <ButtonBigIcon
            icon={
              <FaUserFriends
                size={100}
                className='text-primary-600 mx-auto mb-3'
              />
            }
            title='Pengguna Volunteer'
            link='/customer/pengguna-volunteer'
          />
        </div>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <Statistic variant='customer' />
        </div>
        <div className='grid grid-cols-3'>
          <NewProgram title='Pengguna Baru'>
            {loadingRecentUser ? (
              <Loading />
            ) : recentFundraisingUser.length !== 0 ? (
              recentFundraisingUser.map((item, idx) => {
                return (
                  <ProgramItem
                    key={idx}
                    title={item?.Name}
                    image={
                      <Image
                        src={
                          isLink(item?.PhotoURL)
                            ? item?.PhotoURL
                            : "/exampleProfile.png"
                        }
                        alt='foto profil'
                        width={40}
                        height={40}
                        placeholder='blur'
                        blurDataURL={
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=="
                        }
                        className='rounded-md object-cover object-center'
                      />
                    }
                    variant='netral'
                  />
                );
              })
            ) : (
              <div className='capitalize text-center py-10 text-lg'>
                data tidak ada
              </div>
            )}
          </NewProgram>
          <NewProgram title='Pengguna Fundraising'>
            {loadingRecentFundraisingUser ? (
              <Loading />
            ) : recentUser.length !== 0 ? (
              recentUser.map((item, idx) => {
                return (
                  <ProgramItem
                    key={idx}
                    title={item?.Name}
                    image={
                      <Image
                        src={
                          isLink(item?.PhotoURL)
                            ? item?.PhotoURL
                            : "/exampleProfile.png"
                        }
                        width={40}
                        height={40}
                        placeholder='blur'
                        blurDataURL={
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=="
                        }
                        alt='foto profil'
                        className='rounded-md object-cover object-center'
                      />
                    }
                    variant='netral'
                  />
                );
              })
            ) : (
              <div className='capitalize text-center py-10 text-lg'>
                data tidak ada
              </div>
            )}
          </NewProgram>
          <NewProgram title='Pengguna Volunteer'>
            {loadingRecentVolunteerUser ? (
              <Loading />
            ) : recentVolunteerUser.length !== 0 ? (
              recentVolunteerUser.map((item, idx) => {
                return (
                  <ProgramItem
                    key={idx}
                    title={item?.Name}
                    image={
                      <Image
                        src={
                          isLink(item?.PhotoURL)
                            ? item?.PhotoURL
                            : "/exampleProfile.png"
                        }
                        width={40}
                        height={40}
                        placeholder='blur'
                        blurDataURL={
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=="
                        }
                        alt='foto profil'
                        className='rounded-md object-cover object-center'
                      />
                    }
                    variant='netral'
                  />
                );
              })
            ) : (
              <div className='capitalize text-center py-10 text-lg'>
                data tidak ada
              </div>
            )}
          </NewProgram>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default DashboardCustomer;
