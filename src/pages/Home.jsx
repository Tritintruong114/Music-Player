import React from "react";
import RenderListArtis from "../components/RenderListArtis";
import RenderListGenres from "../components/RenderListGenres";
import HeaderNav from "../components/HeaderNav";

function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black-50">
      <div className="h-5/6 md:h-fit xl:h-fit relative w-3/4 md:w-1/4 xl:w-1/4 bg-black-950 rounded-3xl p-2 flex flex-col items-center">
        <div className="text-white w-full  backdrop-filter backdrop-blur-3xl">
          <HeaderNav />
          <RenderListGenres />
          <RenderListArtis />
        </div>
      </div>
    </div>
  );
}

export default Home;
