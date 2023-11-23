import { useUserToken } from "@/config/redux/user/userSelector";
import {
  usePengajuanProgramVolunteer,
  useRiwayatProgramVolunteerType,
} from "@/config/redux/volunteer/volunteerSelector";
import { retrievePengajuanProgramVolunteer } from "@/config/redux/volunteer/volunteerThunk";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const usePengajuanProgramModel = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const pengajuanProgram = usePengajuanProgramVolunteer();
  const type = useRiwayatProgramVolunteerType();
  const router = useRouter();

  const loading = type === retrievePengajuanProgramVolunteer.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = 10;

  const handleDetail = (id) => {
    router.push(`/volunteer/${id}`);
  };

  useEffect(() => {
    dispatch(retrievePengajuanProgramVolunteer({ currentPage, token }));
  }, [dispatch, token, currentPage]);

  return {
    pengajuanProgram,
    currentPage,
    pageCount,
    handlePaginate,
    loading,
    handleDetail,
  };
};

export default usePengajuanProgramModel;
