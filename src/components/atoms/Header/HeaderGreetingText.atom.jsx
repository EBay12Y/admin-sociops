"use client";

import { useUser } from "@/config/redux/user/userSelector";
import { useEffect, useState } from "react";

const HeaderGreetingText = () => {
  const user = useUser();
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 10) {
      setTimeOfDay("pagi");
    } else if (currentHour >= 10 && currentHour < 15) {
      setTimeOfDay("siang");
    } else if (currentHour >= 15 && currentHour < 18) {
      setTimeOfDay("sore");
    } else {
      setTimeOfDay("malam");
    }
  }, []);
  return (
    <div className='flex flex-col items-start'>
      <p className='font-black md:flex hidden'>Halo, {user.Name}</p>
      <p className='md:flex hidden'>Selamat {timeOfDay}!</p>
    </div>
  );
};

export default HeaderGreetingText;
