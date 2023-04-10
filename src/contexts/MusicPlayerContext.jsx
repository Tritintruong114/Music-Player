import React, { useState } from "react";
import Track1 from "./Track1.mp3";
import Track2 from "./Track2.mp3";
import Track3 from "./Track3.mp3";

const MusicPlayerContext = React.createContext();

export const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Fresh Eyes",
      file: Track1,
      author: "Andy Grammer",
      songPath: "FreshEyes",
    },
    {
      name: "Young & Dumb & Broke",
      file: Track2,
    },
    {
      name: "Comethru",
      file: Track3,
      author: "Jeremy Zucker",
      songPath: "Comethru",
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
