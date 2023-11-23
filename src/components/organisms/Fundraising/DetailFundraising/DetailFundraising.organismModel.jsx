import { useDetailFundraising } from "@/config/redux/fundraising/fundraisingSelector";
import { retrieveDetailFundraising } from "@/config/redux/fundraising/fundraisingThunk";
import { useUserToken } from "@/config/redux/user/userSelector";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useDetailFundraisingModel = ({ id }) => {
  const fundraising = useDetailFundraising();
  const token = useUserToken();
  const dispatch = useDispatch();
  const router = useRouter();

  const isLink = (str) => {
    return (
      typeof str === "string" &&
      (str.startsWith("http://") || str.startsWith("https://"))
    );
  };

  const handleUpdateAccepted = async () => {
    try {
      const req = await axios.patch(
        `${process.env.API_URL}/campaigns/${id}`,
        { status: "ACCEPTED" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const res = await req.data;

      router.push("/fundraising/riwayat-program");
      toast(res.message, { type: "success" });
    } catch (error) {
      toast("Failed update campaign", { type: "error" });
      throw error;
    }
  };

  const handleUpdateRejected = async () => {
    try {
      const req = await axios.patch(
        `${process.env.API_URL}/campaigns/${id}`,
        { status: "REJECTED" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const res = await req.data;

      router.push("/fundraising/riwayat-program");
      toast(res.message, { type: "success" });
    } catch (error) {
      toast("Failed update campaign", { type: "error" });
      throw error;
    }
  };

  useEffect(() => {
    dispatch(retrieveDetailFundraising({ id, token }));
  }, [dispatch, id, token]);

  const [src, setSrc] = useState(true);

  return {
    src,
    setSrc,
    fundraising,
    isLink,
    handleUpdateAccepted,
    handleUpdateRejected,
  };
};

export default useDetailFundraisingModel;
