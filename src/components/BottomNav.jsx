import React from "react";
import {
  UilTriangle,
  UilSearch,
  UilSquareShape,
  UilUser,
  UilCircle,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
function BottomNav() {
  return (
    <div className="w-full p-3  flex justify-around items-center text-white rounded-xl bg-opacity-20 bg-black-500 ">
      <Link to={"/"} className="">
        <UilTriangle className="h-5 xl:h-6" />
      </Link>
      <Link to={"/"}>
        <UilCircle className="h-5 xl:h-6" />
      </Link>
      <Link to={"/"}>
        <UilSquareShape className="h-5 xl:h-6" />
      </Link>
    </div>
  );
}

export default BottomNav;
