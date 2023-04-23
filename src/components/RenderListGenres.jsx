import React, { useContext, createContext } from "react";
import { faker } from "@faker-js/faker";
import { UilPlay } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

export function Button() {
  return (
    <button className="text-black-50 text-xs bg-porsche-500 px-3 py-1 rounded-full cursor-pointer active:text-porsche-500 active:bg-black-900">
      {faker.music.genre().slice(0, 4)}
    </button>
  );
}

export function InfoCard({ url, songTilte, songAuthor, songPath }) {
  return (
    <div className="w-40 bg-black-50 bg-opacity-20 relative shadow-black-50  rounded-xl  flex flex-col">
      <Link to={`play/${songPath}`}>
        <img className="rounded-xl object-cover" src={url} alt="#"></img>
        <UilPlay className="absolute cursor-pointer bottom-1/3 left-1 text-black-50 bg-black-300 rounded bg-opacity-40" />
      </Link>
      <p className="text-black-50 text-md pl-2">{songTilte}...</p>{" "}
      <p className="text-black-50 text-xs text-opacity-60 pl-2">
        {songAuthor}...
      </p>
    </div>
  );
}

function RenderListGenres() {
  const { state, setState } = useContext(MusicPlayerContext);
  return (
    <div className="gap-3 flex flex-col backdrop-filter backdrop-blur-3xl ">
      <div className="flex scroll  h-full overflow-auto gap-3">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>

      <div className="flex scroll h-full overflow-auto gap-3">
        {state.tracks.map((song) => (
          <div key={song.id} className="">
            <InfoCard
              songPath={song.songPath}
              songAuthor={song.author}
              songTilte={song.name}
              url={song.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderListGenres;
