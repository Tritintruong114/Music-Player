import React from "react";
import { TopScreenNav } from "../components/HeaderNav";
import { defaultValues } from "../contexts/MusicPlayerContext";
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

export function PlaySection() {
  return (
    <div className="flex items-center justify-center gap-3">
      <UilStepBackward />
      <UilPrevious />
      <UilPlayCircle className="w-fit h-16" />
      <UilStepForward />
      <UilSkipForward />
    </div>
  );
}
function PlayFreshEyes() {
  return (
    <div className="text-white h-full ">
      <TopScreenNav />
      <div className="flex h-fit w-full items-center justify-between p-3">
        <UilBell />
        <h1>Andy Grammer</h1>
        <UilHeart />
      </div>
      <div className="flex flex-col h-3/4 items-center">
        <img
          className="object-fit h-2/4 rounded-3xl p-3"
          src="https://i.ytimg.com/vi/PM7eSKeS9nY/maxresdefault.jpg"
        ></img>

        <div className="flex flex-col items-center py-3">
          <h1 className="text-3xl font-bold">Fresh Eyes</h1>
          <p className="font-light italic">Andy Grammer</p>
        </div>
        <div className="h-1/4 w-4/5 rounded-xl bg-opacity-30 bg-black-200 flex  flex-col justify-center items-center">
          <p className="font-bold">Lyrics</p>
          <p className="opacity-40 italic ">Comming soon</p>
        </div>
      </div>
      <div>
        <PlaySection />
      </div>
    </div>
  );
}

export default PlayFreshEyes;
