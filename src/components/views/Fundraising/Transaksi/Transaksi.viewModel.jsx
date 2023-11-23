import {
  useRiwayatProgramFundraisingType,
  useTransaksiFundraising,
} from "@/config/redux/fundraising/fundraisingSelector";
import { retrieveTransaksiFundraising } from "@/config/redux/fundraising/fundraisingThunk";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useTransaksiModel = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const transaksi = useTransaksiFundraising();
  const type = useRiwayatProgramFundraisingType();

  const loading = type === retrieveTransaksiFundraising.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = 10;

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    dispatch(retrieveTransaksiFundraising({ token, currentPage }));
  }, [dispatch, token, currentPage]);

  return {
    handlePaginate,
    pageCount,
    transaksi,
    loading,
    currentPage,
  };
};

export default useTransaksiModel;
