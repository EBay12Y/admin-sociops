import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/config/redux/user/userSlice";
import { useEffect } from "react";
import { useUserToken } from "@/config/redux/user/userSelector";

const useFormSignInModel = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useUserToken();

  useEffect(() => {
    if (token.length !== 0) {
      router.push("/dashboard");
    }
  }, [router, token.length]);

  // Remove the Yup schema validation since API login is no longer required
  const schemaSignIn = Yup.object({});

  const handleLogin = async (adminData) => {
    // Skip API login validation and directly redirect to dashboard

    dispatch(login(adminData.email));
    router.push("/dashboard");
    toast("Selamat datang admin", { type: "success" });
  };

  const formik = useFormik({
    initialValues: {
      email: "ekabayu@example.com",
      password: "12345678",
    },
    validationSchema: schemaSignIn, // Remove schema validation
    onSubmit: (values) => {
      handleLogin(values);
      formik.resetForm();
    },
  });

  return { formik };
};

export default useFormSignInModel;
