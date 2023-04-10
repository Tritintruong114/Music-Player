import React from "react";
import {
  UilEstate,
  UilSearch,
  UilFolderOpen,
  UilUser,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
function BottomNav() {
  return (
    <div className="w-full p-3   flex bottom-0 justify-around items-center text-white absolute">
      <Link to={"/"}>
        <UilEstate />
      </Link>
      <Link>
        <UilSearch />
      </Link>
      <Link>
        <UilFolderOpen />
      </Link>
      <Link>
        <UilUser />
      </Link>
    </div>
  );
}

export default BottomNav;
