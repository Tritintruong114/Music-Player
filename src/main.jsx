import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SongPlayingCard from "./pages/SongPlayingCard";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Play from "./pages/Play";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "play",
        element: <Play />,
        children: [
          {
            path: "Comethru",
            element: <SongPlayingCard index={2} />,
          },
          {
            path: "DaVu",
            element: <SongPlayingCard index={1} />,
          },
          {
            path: "redbone",
            element: <SongPlayingCard index={0} />,
          },
          {
            path: "FreshEyes",
            element: <SongPlayingCard index={3} />,
          },
        ],
      },
    ],
  },
  {
    index: true,
    element: <Home />,
  },
]);
//Co 1 cai state giu lai ID cua bai hat , khi click vao 1 bai hat truyen nguoc lai len main
//sau do truyen xuong duoi lai

function Wrapper() {
  return (
    <MusicPlayerProvider>
      <RouterProvider router={router} />
    </MusicPlayerProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>
);
