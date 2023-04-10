import React, { useState } from "react";
import {
  UilSearch,
  UilBell,
  UilWifi,
  UilSignalAlt,
  UilBatteryBolt,
} from "@iconscout/react-unicons";
export function TopScreenNav() {
  const time = new Date();
  const currentTime = time.getHours() + ":" + time.getMinutes();
  return (
    <div className="flex w-full justify-between">
      <div className="text-black-50 px-3">
        <p className="text-xs">{currentTime}</p>
      </div>
      <div className="text-black-50 px-3 flex gap-1 ">
        <UilSignalAlt size="15" />
        <UilWifi size="15" />
        <UilBatteryBolt size="15" />
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
        <div className="bg-black-50 relative p-1 rounded-xl">
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
