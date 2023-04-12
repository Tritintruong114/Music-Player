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
} from "@iconscout/react-unicons";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import { Link, Outlet } from "react-router-dom";

export function PlaySection({ index }) {
  const { state, setState } = useContext(MusicPlayerContext);
  const [songIsPlaying, setSongIsPlaying] = useState(false);
  let newIndex = index;

  const playThisSong = (newIndex) => {
    //the first click will show undefined because the stat.currentract is null. If we set index to the console. will be print correct number index
    //This function is play the index number being passing to throught Props
    //this is logout the prev id of the list if passing index, will log out the core index be passing in through props.
    state.audioPlayer.pause(state.currenTrackId);
    setSongIsPlaying((prev) => !prev);
    state.audioPlayer = new Audio(state.tracks[newIndex].file);
    state.audioPlayer.play();
    setState({ ...state, currenTrackId: newIndex });
    console.log("Play", state.tracks[newIndex].name);
  };

  const play = () => {
    state.audioPlayer.pause(); //pause
    setSongIsPlaying((prev) => !prev);
    state.audioPlayer = new Audio(state.tracks[newIndex].file);
    state.audioPlayer.play();
  };

  const pauseThisSong = () => {
    state.audioPlayer.pause(); //pause
    setSongIsPlaying((prev) => !prev); //set for the UI return to Play ready to click
    console.log(state.currenTrackId, "PAUSE");
  };

  const playNextTrack = () => {
    state.audioPlayer.pause(state.currenTrackId);
    setSongIsPlaying(false);
    newIndex = (state.currenTrackId + 1) % state.tracks.length;
    console.log(newIndex, "NEXT");
    playThisSong(newIndex);
    setState({ ...state, currenTrackId: newIndex });
    //need to change the core index when passing in
  };

  const playPrevTrack = () => {
    state.audioPlayer.pause(state.currenTrackId);
    setSongIsPlaying(false);
    const newId =
      (((state.currenTrackId + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    console.log(newId, "Prev");
    setState({ ...state, currenTrackId: newId });
    playThisSong(newId);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <UilStepBackward className="cursor-pointer" onClick={playPrevTrack} />
      <UilPrevious />
      {!songIsPlaying ? (
        <UilPlayCircle className="w-fit h-16 cursor-pointer" onClick={play} />
      ) : (
        <UilPauseCircle
          className="w-fit h-16 cursor-pointer"
          onClick={() => pauseThisSong(index)}
        />
      )}
      <UilStepForward />
      <Link to={`play`}>
        <UilSkipForward className="cursor-pointer" onClick={playNextTrack} />
      </Link>
    </div>
  );
}

export function SongPlayingCard({ index }) {
  const { state, setState } = useContext(MusicPlayerContext);
  //This is the problem

  return (
    <>
      <TopScreenNav />
      <div className="flex h-fit w-full items-center justify-between px-3 py-1">
        <UilBell />
        <h1>{state.tracks[index].author}</h1>
        <UilHeart />
      </div>
      <div className="flex flex-col h-3/4 items-center">
        <img
          className="object-fit h-2/4 rounded-3xl p-3 "
          src={state.tracks[index].image}
        ></img>

        <div className="flex flex-col items-center py-3">
          <h1 className="text-3xl font-bold">{state.tracks[index].name}</h1>
          <p className="font-light italic">{state.tracks[index].author}</p>
        </div>
        <div className="h-2/5 w-4/5 rounded-xl bg-opacity-30 bg-black-200 flex  flex-col justify-center items-center">
          <p className="font-bold">Lyrics</p>
          <p className="opacity-40 italic ">Comming soon</p>
        </div>
      </div>

      <div>
        <PlaySection index={state.currenTrackId} />
      </div>
    </>
  );
}

export default SongPlayingCard;
