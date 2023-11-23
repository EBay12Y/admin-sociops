"use client";

import { useRouter } from "next/navigation";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useEffect } from "react";

const useWithAuth = () => {
  const router = useRouter();
  const token = useUserToken();

  useEffect(() => {
    if (token.length === 0) {
      router.replace("/");
    }
  }, [router, token.length]);
};

export default useWithAuth;
