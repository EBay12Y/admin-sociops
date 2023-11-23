import { retrieveDetailVolunteer } from "@/config/redux/volunteer/volunteerThunk";
import { useDetailVolunteer } from "@/config/redux/volunteer/volunteerSelector";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const useDetailVolunteerModel = ({ id }) => {
  const volunteer = useDetailVolunteer();
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

      router.push("/volunteer/riwayat-program");
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

      router.push("/volunteer/riwayat-program");
      toast(res.message, { type: "success" });
    } catch (error) {
      toast("Failed update campaign", { type: "error" });
      throw error;
    }
  };

  useEffect(() => {
    dispatch(retrieveDetailVolunteer({ id, token }));
  }, [dispatch, id, token]);

  const [src, setSrc] = useState(true);

  return {
    src,
    setSrc,
    volunteer,
    isLink,
    handleUpdateAccepted,
    handleUpdateRejected,
  };
};

export default useDetailVolunteerModel;
