import React, { useState, useRef, useEffect, useContext } from "react";
import { TopScreenNav } from "../components/HeaderNav";
import {
  UilPlayCircle,
  UilPrevious,
  UilStepForward,
  UilPauseCircle,
  UilSkipForward,
  UilStepBackward,
  UilBell,
  UilHeart,
} from "@iconscout/react-unicons";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

export function PlaySection({ index }) {
  const { state, setState } = useContext(MusicPlayerContext);
  const [songIsPlaying, setSongIsPlaying] = useState(false);

  const playThisSong = (index) => {
    setSongIsPlaying((prev) => !prev);
    state.currenTrackId = index;
    console.log(state.currenTrackId, " This is Testing");
    state.audioPlayer = new Audio(state.tracks[index].file);
    state.audioPlayer.play();
    setState({ ...state, currenTrackId: index });
  };

  const pauseThisSong = (index) => {
    state.audioPlayer.pause();
    setSongIsPlaying((prev) => !prev);
    console.log("PAUSE", index);
  };
  const playNextTrack = (index) => {
    state.audioPlayer.pause();
    setSongIsPlaying(true);
    const newId = (state.currenTrackId + 1) % state.tracks.length;
    state.audioPlayer = new Audio(state.tracks[newId].file);
    state.currenTrackId = newId;
    state.audioPlayer.play();
    console.log("NEXT", newId);
  };

  const playPrevTrack = (index) => {
    state.audioPlayer.pause();
    setSongIsPlaying(true);
    const newId = (state.currenTrackId - 1) % state.tracks.length;
    state.audioPlayer = new Audio(state.tracks[newId].file);
    state.currenTrackId = newId;
    state.audioPlayer.play();
  };
  return (
    <div className="flex items-center justify-center gap-3">
      <UilStepBackward
        className="cursor-pointer"
        onClick={() => playPrevTrack(index)}
      />
      <UilPrevious />
      {!songIsPlaying ? (
        <UilPlayCircle
          className="w-fit h-16 cursor-pointer"
          onClick={() => playThisSong(index)}
        />
      ) : (
        <UilPauseCircle
          className="w-fit h-16 cursor-pointer"
          onClick={() => pauseThisSong(index)}
        />
      )}
      <UilStepForward />
      <UilSkipForward
        className="cursor-pointer"
        onClick={() => playNextTrack(index)}
      />
    </div>
  );
}

export function SongPlayingCard({ author, songTitle, url, index }) {
  const { state, setState } = useContext(MusicPlayerContext);

  return (
    <div className="text-white h-full ">
      <TopScreenNav />
      <div className="flex h-fit w-full items-center justify-between px-3 py-1">
        <UilBell />
        <h1>{author}</h1>
        <UilHeart />
      </div>
      <div className="flex flex-col h-3/4 items-center">
        <img className="object-fit h-2/4 rounded-3xl p-3 " src={url}></img>

        <div className="flex flex-col items-center py-3">
          <h1 className="text-3xl font-bold">{songTitle}</h1>
          <p className="font-light italic">{author}</p>
        </div>
        <div className="h-2/5 w-4/5 rounded-xl bg-opacity-30 bg-black-200 flex  flex-col justify-center items-center">
          <p className="font-bold">Lyrics</p>
          <p className="opacity-40 italic ">Comming soon</p>
        </div>
      </div>
      <div>
        <PlaySection index={index} />
      </div>
    </div>
  );
}

export default SongPlayingCard;
