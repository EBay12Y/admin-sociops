import { useUserToken } from "@/config/redux/user/userSelector";
import {
  useListProgramVolunteer,
  useRiwayatProgramVolunteerType,
} from "@/config/redux/volunteer/volunteerSelector";
import { retrieveListProgramVolunteer } from "@/config/redux/volunteer/volunteerThunk";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useListProgramVolunteerModel = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const listProgram = useListProgramVolunteer();
  const type = useRiwayatProgramVolunteerType();

  const loading = type === retrieveListProgramVolunteer.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = 10;

  useEffect(() => {
    dispatch(retrieveListProgramVolunteer({ currentPage, token }));
  }, [dispatch, token, currentPage]);

  return { listProgram, currentPage, pageCount, handlePaginate, loading };
};

export default useListProgramVolunteerModel;
