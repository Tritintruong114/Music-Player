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
    <div className="w-full p-2 flex bottom-0 justify-around items-center text-white absolute">
      <Link to={"/workingOn"} className="">
        <UilTriangle />
      </Link>
      <Link to={"/workingOn"}>
        <UilCircle />
      </Link>
      <Link to={"/workingOn"}>
        <UilSquareShape />
      </Link>
    </div>
  );
}

export default BottomNav;
