import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import SongPlayingCard from "./pages/SongPlayingCard";
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
