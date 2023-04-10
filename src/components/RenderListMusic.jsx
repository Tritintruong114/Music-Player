import React from "react";
import { InfoCard } from "./RenderListGenres";
import { Link } from "react-router-dom";

function RenderListMusic() {
  return (
    <div className="w-full  gap-3 p-3  flex overflow-x-scroll">
      <InfoCard
        songAuthor={"Andy Grammer"}
        songTilte={"Fresh eyes"}
        url={`https://i.ytimg.com/vi/PM7eSKeS9nY/maxresdefault.jpg`}
      />

      <InfoCard
        songAuthor={"Jeremy Zucker"}
        songTilte={"Comethru"}
        url={`https://i.ytimg.com/vi/wDchbFDUMe0/maxresdefault.jpg`}
      />
    </div>
  );
}

export default RenderListMusic;
