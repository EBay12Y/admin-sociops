"use client";

import { useUserToken } from "@/config/redux/user/userSelector";
import { useRouter } from "next/navigation";

const WithAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const token = useUserToken();

    // If user is not logged in, return login component
    if (token.length === 0) {
      router.replace("/");
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  return Auth;

  // const router = useRouter();
  // const token = useUserToken();

  // // If user is not logged in, return login component
  // if (token.length === 0) {
  //   router.replace("/");
  // }

  // // If user is logged in, return original component
  // return <>{children}</>;
};
export default WithAuth;
