import React, { useState } from "react";
// import React from "react";
import Track1 from "./Track1.mp3";
// import Track2 from "./Track2.mp3";
import Track3 from "./Track3.mp3";
import Track4 from "./Track4.mp3";
import Track5 from "./Track5.mp3";

const MusicPlayerContext = React.createContext();

export const defaultValues = {
  audioPlayer: new Audio(),
  currentTrackId: 0, //null refresh crash
  //Thiss iss the problem , we need to pass the valua from the main.jsx when click
  //This currentTrack is null , so the UI wont be rendering, we have make a number = tracks.length
  index: null,
  tracks: [
    {
      id: 0,
      name: "Redbone ",
      file: Track5,
      author: "Joseph Solomon",
      songPath: "redbone",
      image:
        "https://legacydisciple.org/wp-content/uploads/2018/01/Joseph-Solomon-759x500.jpg",
    },

    {
      id: 1,
      name: "Dạ Vũ",
      file: Track4,
      author: "Tăng Duy Tân",
      songPath: "DaVu",
      image: "https://i.ytimg.com/vi/o0t_Rwn_TtQ/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "Comethru",
      file: Track3,
      author: "Jeremy Zucker",
      songPath: "Comethru",
      image: "https://i.ytimg.com/vi/wDchbFDUMe0/maxresdefault.jpg",
    },

    {
      id: 3,
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
