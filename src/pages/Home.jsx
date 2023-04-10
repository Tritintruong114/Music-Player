import React from "react";
import RenderListArtis from "../components/RenderListArtis";
import RenderListGenres from "../components/RenderListArtis";
import RenderListMusic from "./../components/RenderListMusic";
import HeaderNav from "../components/HeaderNav";

function Home() {
  return (
    <div className="text-white">
      <HeaderNav />
      <RenderListGenres />
      <RenderListMusic />
      <RenderListArtis />
    </div>
  );
}

export default Home;
