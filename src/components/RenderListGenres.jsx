import React from "react";
import { faker } from "@faker-js/faker";
import { UilPlay } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <button className="text-black-50 text-xs w-full bg-porsche-500 px-3 py-1 rounded-full cursor-pointer active:text-porsche-500 active:bg-black-900">
      {faker.music.genre().slice(0, 4)}
    </button>
  );
}

export function InfoCard({ url, songTilte, songAuthor, songPath }) {
  return (
    <div className="w-2/4 h-2/4 bg-black-50 bg-opacity-20 relative shadow-black-50  rounded-xl  flex flex-col">
      <img className="rounded-xl h-3/4 p-1" src={url} alt="#"></img>
      <Link to={`play/${songPath}`}>
        <UilPlay className="absolute bottom-1/3 left-1 text-black-50 bg-black-300 rounded bg-opacity-40" />
      </Link>
      <p className="text-black-50 text-md pl-2">{songTilte}...</p>{" "}
      <p className="text-black-50 text-xs text-opacity-60 pl-2">
        {songAuthor}...
      </p>
    </div>
  );
}

function RenderListGenres() {
  return (
    <div className="w-full px-3 flex justify-between overflow-x-scroll gap-3">
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default RenderListGenres;
