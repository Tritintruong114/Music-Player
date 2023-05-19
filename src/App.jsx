import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import { MusicPlayerContext } from "./contexts/MusicPlayerContext";
import { useContext } from "react";
import Play from "./pages/Play";

function App() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black-50 p-3">
      <div className="w-full  relative md:w-2/4 xl:w-1/5 bg-black-950 rounded-3xl p-2 flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
