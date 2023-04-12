import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SongPlayingCard from "./pages/SongPlayingCard";
import {
  MusicPlayerProvider,
  defaultValues,
} from "./contexts/MusicPlayerContext";
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
            path: "Fresheyes",
            element: <SongPlayingCard index={3} />,
          },
          {
            path: "Comethru",
            element: <SongPlayingCard index={2} />,
          },
          {
            path: "DaVu",
            element: <SongPlayingCard index={1} />,
          },
          {
            path: "waitingForYou",
            element: <SongPlayingCard index={0} />,
          },
        ],
      },

      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicPlayerProvider>
      <RouterProvider router={router} />
    </MusicPlayerProvider>
  </React.StrictMode>
);
