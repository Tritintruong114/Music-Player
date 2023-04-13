import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { PlaySection } from "./SongPlayingCard";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

function Play() {
  const { state, setState } = useContext(MusicPlayerContext);
  console.log(state.currentTrackId, "FROM Play component");

  return (
    <div
      style={{
        backgroundImage: `url(${state.tracks[state.currentTrackId].image})`,
        backgroundRepeat: "no-repeat",
      }}
      className="text-white w-full h-full rounded-xl "
    >
      <div className="text-white h-fit backdrop-filter backdrop-blur-xl rounded-xl">
        <Outlet />
        <PlaySection index={state.currentTrackId} />
      </div>
    </div>
  );
}

export default Play;
