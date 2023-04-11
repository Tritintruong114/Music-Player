import React, { useContext } from "react";
import { InfoCard } from "./RenderListGenres";
import { Link } from "react-router-dom";
import { defaultValues } from "../contexts/MusicPlayerContext";

function RenderListMusic() {
  return (
    <div className="w-full">
      <div className="flex overflow-x-scroll ">
        {defaultValues.map((song) => (
          <InfoCard
            songPath={song.songPath}
            songAuthor={song.author}
            songTilte={song.name}
            url={song.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RenderListMusic;
