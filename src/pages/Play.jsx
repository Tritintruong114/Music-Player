import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { PlaySection } from "./SongPlayingCard";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

function Play() {
  const { state, setState } = useContext(MusicPlayerContext);
  console.log(state.currentTrackId, "FROM Play component");

  return (
    <div className="text-white h-full">
      <Outlet />
      <PlaySection index={state.currentTrackId} />
    </div>
  );
}

export default Play;
