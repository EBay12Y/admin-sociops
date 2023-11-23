import { useSelector } from "react-redux";

export const useDetailFundraising = () =>
  useSelector((state) => state.fundraising.fundraisingDetail);

export const useRiwayatProgramFundraising = () =>
  useSelector((state) => state.fundraising.riwayatProgramFundraising);

export const usePengajuanProgramFundraising = () =>
  useSelector((state) => state.fundraising.pengajuanProgramFundraising);

export const useListProgramFundraising = () =>
  useSelector((state) => state.fundraising.listProgramFundraising);

export const useTransaksiFundraising = () =>
  useSelector((state) => state.fundraising.transaksiFundraising);

export const useRiwayatProgramFundraisingType = () =>
  useSelector((state) => state.fundraising.type);
