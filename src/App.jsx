import { Outlet } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import RenderListArtis from "./components/RenderListArtis";
import RenderListGenres from "./components/RenderListGenres";
import RenderListMusic from "./components/RenderListMusic";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black-50">
      <div className="h-3/4 relative w-3/4 bg-black-950 rounded-3xl p-3 flex flex-col items-center">
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
