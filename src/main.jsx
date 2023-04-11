import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SongPlayingCard from "./pages/SongPlayingCard";
import { defaultValues } from "./contexts/MusicPlayerContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "play/FreshEyes",
        element: (
          <SongPlayingCard
            url={"https://i.ytimg.com/vi/PM7eSKeS9nY/maxresdefault.jpg"}
            author={"Andy Grammer"}
            songTitle={"Fresh Eyes"}
            index={3}
          />
        ),
      },
      {
        path: "play/Comethru",
        element: (
          <SongPlayingCard
            url={"https://i.ytimg.com/vi/wDchbFDUMe0/maxresdefault.jpg"}
            author={"Jeremy Zucker"}
            songTitle={"Comethru"}
            index={2}
          />
        ),
      },
      {
        path: "play/DaVu",
        element: (
          <SongPlayingCard
            url={"https://i.ytimg.com/vi/o0t_Rwn_TtQ/maxresdefault.jpg"}
            author={"Tăng Duy Tân"}
            songTitle={"Dạ Vũ"}
            index={1}
          />
        ),
      },
      {
        path: "play/waitingForYou",
        element: (
          <SongPlayingCard
            url={
              "https://i.ytimg.com/vi/CHw1b_1LVBA/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_ICcoHzAP&rs=AOn4CLACGxnDdM001B77P_22v4lzo_JmZQ"
            }
            author={"Mono"}
            songTitle={"Waiting For You"}
            index={0}
          />
        ),
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
