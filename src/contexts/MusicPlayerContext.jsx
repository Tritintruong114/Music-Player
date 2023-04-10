import React, { useState } from "react";
// import React from "react";
import Track1 from "./Track1.mp3";
// import Track2 from "./Track2.mp3";
import Track3 from "./Track3.mp3";

const MusicPlayerContext = React.createContext();

export const defaultValues = {
  audioPlayer: new Audio(),
  currentSongId: null,
  tracks: [
    {
      id: 1,
      name: "Comethru",
      file: Track3,
      author: "Jeremy Zucker",
      songPath: "Comethru",
      image: "https://i.ytimg.com/vi/wDchbFDUMe0/maxresdefault.jpg",
    },

    {
      id: 2,
      name: "Fresh Eyes",
      file: Track1,
      author: "Andy Grammer",
      songPath: "FreshEyes",
      image: "https://i.ytimg.com/vi/PM7eSKeS9nY/maxresdefault.jpg",
    },
    {
      id: 1,
      name: "Comethru",
      file: Track3,
      author: "Jeremy Zucker",
      songPath: "Comethru",
      image: "https://i.ytimg.com/vi/wDchbFDUMe0/maxresdefault.jpg",
    },

    {
      id: 2,
      name: "Fresh Eyes",
      file: Track1,
      author: "Andy Grammer",
      songPath: "FreshEyes",
      image: "https://i.ytimg.com/vi/PM7eSKeS9nY/maxresdefault.jpg",
    },
  ],
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
