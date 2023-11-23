import { useEffect, useState } from "react";
import { useDetailNews } from "@/config/redux/news/newsSelector";
import { useDispatch } from "react-redux";
import { retrieveDetailNews } from "@/config/redux/news/newsThunk";
import { useUserToken } from "@/config/redux/user/userSelector";

const useDetailNewsModel = ({ id }) => {
  const news = useDetailNews();
  const token = useUserToken();
  const dispatch = useDispatch();

  const isLink = (str) => {
    return (
      typeof str === "string" &&
      (str.startsWith("http://") || str.startsWith("https://"))
    );
  };

  useEffect(() => {
    dispatch(retrieveDetailNews({ id, token }));
  }, [dispatch, id, token]);

  const [src, setSrc] = useState(true);

  return { src, setSrc, news, isLink };
};

export default useDetailNewsModel;
