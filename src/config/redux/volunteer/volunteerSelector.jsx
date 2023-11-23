import { useSelector } from "react-redux";

export const useDetailVolunteer = () =>
  useSelector((state) => state.volunteer.volunteerDetail);

export const useRiwayatProgramVolunteer = () =>
  useSelector((state) => state.volunteer.riwayatProgramVolunteer);

export const useListProgramVolunteer = () =>
  useSelector((state) => state.volunteer.listProgram);

export const usePengajuanProgramVolunteer = () =>
  useSelector((state) => state.volunteer.pengajuanProgram);

export const useRiwayatProgramVolunteerType = () =>
  useSelector((state) => state.volunteer.type);
