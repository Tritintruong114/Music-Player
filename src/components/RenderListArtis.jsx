import React from "react";
import { faker } from "@faker-js/faker";

export function Avatar() {
  return (
    <div className="h-fit">
      <img
        className="rounded-full object-contain"
        src={faker.internet.avatar()}
      ></img>
      <p className="text-black-50 text-xs">
        {faker.name.findName().slice(0, 6)}
      </p>
    </div>
  );
}
function RenderListArtis() {
  return (
    <div className="p-3 h-2/4 w-full">
      <div>
        <h1 className="text-black-50 font-Poppin">Artis</h1>
      </div>
      <div className="overflow-x-scroll w-full h-full flex gap-3 ">
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
}

export default RenderListArtis;
