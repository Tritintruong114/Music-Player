import React from "react";
import RenderListArtis from "../components/RenderListArtis";
import RenderListGenres from "../components/RenderListGenres";
import RenderListMusic from "./../components/RenderListMusic";
import HeaderNav from "../components/HeaderNav";

function Home() {
  return (
    <div className="text-white w-full">
      <HeaderNav />
      <RenderListGenres />
      <RenderListArtis />
    </div>
  );
}

export default Home;
