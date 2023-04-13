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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        index: true,
        element: <SongPlayingCard index={3} />,
      },
      {
        path: "FreshEyes",
        element: <SongPlayingCard index={2} />,
      },
    ],
  },
  {
    path: "workingOn",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicPlayerProvider>
      <RouterProvider router={router} />
    </MusicPlayerProvider>
  </React.StrictMode>
);
