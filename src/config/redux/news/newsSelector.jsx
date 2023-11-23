import { useSelector } from "react-redux";

export const useDetailNews = () =>
  useSelector((state) => state.news.newsDetail);

export const useListNews = () => useSelector((state) => state.news.listNews);

export const useListType = () => useSelector((state) => state.news.type);
