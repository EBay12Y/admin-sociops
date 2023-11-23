import { useListNews, useListType } from "@/config/redux/news/newsSelector";
import { retrieveListNews } from "@/config/redux/news/newsThunk";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useListNewsModel = () => {
  const dispatch = useDispatch();
  const token = useUserToken();
  const listNews = useListNews();
  const type = useListType();
  const router = useRouter();

  const loading = type === retrieveListNews.pending.type;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = 10;

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDetail = (id) => {
    router.push(`/news/${id}`);
  };
  const isLink = (str) => {
    return (
      typeof str === "string" &&
      (str.startsWith("http://") || str.startsWith("https://"))
    );
  };
  const [src, setSrc] = useState(true);

  useEffect(() => {
    dispatch(retrieveListNews({ token, currentPage }));
  }, [dispatch, token, currentPage]);

  return {
    handlePaginate,
    pageCount,
    listNews,
    loading,
    currentPage,
    handleDetail,
    isLink,
    src,
    setSrc,
  };
};

export default useListNewsModel;
