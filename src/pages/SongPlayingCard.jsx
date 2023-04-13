import React, { useState, useContext } from "react";
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
  UilPlay,
} from "@iconscout/react-unicons";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import { Link, Outlet } from "react-router-dom";

export function PlaySection({ index }) {
  const { state, setState } = useContext(MusicPlayerContext);
  const [songIsPlaying, setSongIsPlaying] = useState(false);
  // let newIndex = index;

  const playThisSong = (newIndex) => {
    //the first click will show undefined because the stat.currentract is null. If we set index to the console. will be print correct number index
    //This function is play the index number being passing to throught Props
    //this is logout the prev id of the list if passing index, will log out the core index be passing in through props.
    setState({ ...state, currentTrackId: newIndex });
    state.audioPlayer.pause(state.currentTrackId);
    setSongIsPlaying((prev) => !prev);
    state.audioPlayer = new Audio(state.tracks[newIndex].file);
    state.audioPlayer.play();
    setState({ ...state, currentTrackId: newIndex });
    console.log("Play", state.tracks[newIndex].name);
  };

  const play = (index) => {
    console.log(index, "from play function");
    state.audioPlayer.pause(); //pause
    setSongIsPlaying((prev) => !prev);
    state.audioPlayer = new Audio(state.tracks[index].file);
    state.audioPlayer.play();
  };

  const pauseThisSong = () => {
    state.audioPlayer.pause(); //pause
    setSongIsPlaying((prev) => !prev); //set for the UI return to Play ready to click
    console.log(state.currentTrackId, "PAUSE");
  };

  const playNextTrack = (newIndex) => {
    state.audioPlayer.pause(state.currentTrackId);
    setState({ ...state, currentTrackId: newIndex });
    setSongIsPlaying(false);
    newIndex = (state.currentTrackId + 1) % state.tracks.length;
    console.log(newIndex, "NEXT");
    playThisSong(newIndex);
    setState({ ...state, currentTrackId: newIndex });
    //need to change the core index when passing in
  };

  const playPrevTrack = (newIndex) => {
    state.audioPlayer.pause(state.currentTrackId);
    setSongIsPlaying(false);
    const newId =
      (((state.currentTrackId + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    console.log(index, "Prev");
    setState({ ...state, currentTrackId: newId });
    playThisSong(newId);
  };

  return (
    <div className="flex items-center md:p-3 justify-center gap-3">
      <Link
        to={`${
          state.tracks[
            (((state.currentTrackId + -1) % state.tracks.length) +
              state.tracks.length) %
              state.tracks.length
          ].songPath
        }`}
      >
        <UilStepBackward className="cursor-pointer" onClick={playPrevTrack} />
      </Link>
      <UilPrevious />
      {!songIsPlaying ? (
        <UilPlay
          className="w-fit h-16 cursor-pointer font-light"
          onClick={() => play(index)}
        />
      ) : (
        <UilPauseCircle
          className="w-fit h-16 cursor-pointer"
          onClick={() => pauseThisSong(index)}
        />
      )}
      <UilStepForward />
      <Link
        to={`${
          state.tracks[(state.currentTrackId + 1) % state.tracks.length]
            .songPath
        }`}
      >
        <UilSkipForward
          className="cursor-pointer"
          onClick={() => playNextTrack(index)}
        />
      </Link>
    </div>
  );
}

export function SongPlayingCard({ index }) {
  const { state, setState } = useContext(MusicPlayerContext);
  //This is the problem
  console.log(
    state.currentTrackId,
    index,
    state.tracks[state.currentTrackId].songPath,
    "THIS FROM SONGPLAYINGCARD"
  );

  return (
    <>
      <TopScreenNav />
      <div className="flex h-fit w-full items-center justify-between px-3 py-1">
        <UilBell />
        <h1>{state.tracks[state.currentTrackId].author}</h1>
        <UilHeart />
      </div>
      <div className="flex flex-col h-3/4 items-center">
        <img
          className="object-cover h-2/4 rounded-3xl p-3 "
          src={state.tracks[state.currentTrackId].image}
        ></img>

        <div className="flex flex-col items-center py-3">
          <h1 className="text-3xl font-bold">
            {state.tracks[state.currentTrackId].name}
          </h1>
          <p className="font-light italic">
            {state.tracks[state.currentTrackId].author}
          </p>
        </div>
        <div className="h-2/5 w-4/5 rounded-xl bg-opacity-40 bg-black-300 flex  flex-col justify-center items-center">
          <p className="font-bold">Lyrics</p>
          <p className="opacity-40 italic ">Comming soon</p>
        </div>
      </div>
    </>
  );
}

export default SongPlayingCard;
