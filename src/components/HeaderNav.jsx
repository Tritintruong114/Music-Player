import React, { useState, useEffect } from "react";
import {
  UilSearch,
  UilBell,
  UilWifi,
  UilSignalAlt,
  UilBatteryBolt,
} from "@iconscout/react-unicons";
export function TopScreenNav() {
  // const time = new Date();
  // const currentTime =
  //   time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds;

  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const currentTime = time.getHours() + ":" + time.getMinutes();
      setTimeString(currentTime);
    }, 1000);
  }, []);

  return (
    <div className="flex w-full justify-between backdrop-filter backdrop-blur-3xl pb-3 rounded-xl">
      <div className="text-black-50 px-3">
        <p className="text-sm">{timeString}</p>
      </div>
      <div className="text-black-50 px-3 flex gap-1 ">
        <UilSignalAlt size="18" />
        <UilWifi size="18" />
        <UilBatteryBolt size="18" />
      </div>
    </div>
  );
}
function HeaderNav() {
  return (
    <div>
      <TopScreenNav />

      <div className="flex w-full justify-between items-center p-3">
        <div className="w-3/4">
          <h1 className="text-xl font-bold font-Poppin text-black-50">
            Good Morning
          </h1>
          <h1 className="text-sm text-black-50">Welcome back Bruno !</h1>
        </div>
        <div className=" relative p-1 rounded-xl">
          <UilBell />
          <p className="absolute text-xl top-3 right-0 font-bold text-porsche-700">
            •
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
