import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import { MusicPlayerContext } from "./contexts/MusicPlayerContext";
import { useContext } from "react";
import Play from "./pages/Play";

function App() {
  const { state, setState } = useContext(MusicPlayerContext);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black-50">
      <div className="h-5/6 md:h-3/4 xl:h-3/4 relative w-3/4 md:w-1/4 xl:w-1/4 bg-black-950 rounded-3xl p-2 flex flex-col items-center">
        <Play>
          <Outlet />
        </Play>
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
