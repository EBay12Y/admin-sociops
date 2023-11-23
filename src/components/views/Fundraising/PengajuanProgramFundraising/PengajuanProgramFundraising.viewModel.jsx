import {
  usePengajuanProgramFundraising,
  useRiwayatProgramFundraisingType,
} from "@/config/redux/fundraising/fundraisingSelector";
import { retrievePengajuanProgramFundraising } from "@/config/redux/fundraising/fundraisingThunk";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const usePengajuanProgramFundraisingModel = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const pengajuan = usePengajuanProgramFundraising();
  const type = useRiwayatProgramFundraisingType();
  const router = useRouter();

  const loading = type === retrievePengajuanProgramFundraising.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = 10;

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDetail = (id) => {
    router.push(`/fundraising/${id}`);
  };

  useEffect(() => {
    dispatch(retrievePengajuanProgramFundraising({ token, currentPage }));
  }, [dispatch, token, currentPage]);

  return {
    handlePaginate,
    pageCount,
    pengajuan,
    loading,
    currentPage,
    handleDetail,
  };
};

export default usePengajuanProgramFundraisingModel;
