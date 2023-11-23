import {
  useDaftarPengguna,
  useTypeDaftarAkunPengguna,
  useUserToken,
} from "@/config/redux/user/userSelector";
import { retrieveDaftarAkunPengguna } from "@/config/redux/user/userThunk";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useDaftarAkunPengguna = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const pengguna = useDaftarPengguna();
  const type = useTypeDaftarAkunPengguna();

  const loading = type === retrieveDaftarAkunPengguna.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = 10;

  useEffect(() => {
    dispatch(retrieveDaftarAkunPengguna({ token, currentPage }));
  }, [dispatch, currentPage, token]);

  return {
    handlePaginate,
    pageCount,
    pengguna,
    loading,
    currentPage,
  };
};

export default useDaftarAkunPengguna;
