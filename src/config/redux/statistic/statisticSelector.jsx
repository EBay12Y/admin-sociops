import { useSelector } from "react-redux";

export const useCustomerStatistic = () =>
  useSelector((state) => state.statistic.customerStatistic);
export const useVolunteerStatistic = () =>
  useSelector((state) => state.statistic.volunteerStatistic);
export const useFundraisingStatistic = () =>
  useSelector((state) => state.statistic.fundraisingStatistic);
