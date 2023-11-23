import { useDispatch } from "react-redux";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useListProgramFundraising } from "@/config/redux/fundraising/fundraisingSelector";
import { useRiwayatProgramFundraisingType } from "@/config/redux/fundraising/fundraisingSelector";
import { retrieveListProgramFundraising } from "@/config/redux/fundraising/fundraisingThunk";
import { useState, useEffect } from "react";

const useListProgramFundraisingModel = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const program = useListProgramFundraising();
  const type = useRiwayatProgramFundraisingType();

  const loading = type === retrieveListProgramFundraising.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = 10;

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    dispatch(retrieveListProgramFundraising({ token, currentPage }));
  }, [dispatch, token, currentPage]);

  return {
    handlePaginate,
    pageCount,
    program,
    loading,
    currentPage,
  };
};

export default useListProgramFundraisingModel;
