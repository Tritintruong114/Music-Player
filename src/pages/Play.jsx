import React from "react";
import { Outlet } from "react-router-dom";

function Play() {
  return (
    <div className="text-white h-full">
      <Outlet />
    </div>
  );
}

export default Play;
