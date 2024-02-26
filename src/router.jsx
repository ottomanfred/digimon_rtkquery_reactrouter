import { createBrowserRouter } from "react-router-dom";
import DigimonList from "./DigimonList";
import Digi from "./Digi"; 
import Root from "./Root";
import Home from "./Home";

// `createBrowserRouter` takes an array of objects
// each object represents a route (a URL & the element to render at that URL)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/digimon",
        element: <DigimonList />,
      },
      {
        path: "/digimon/:id",
        element: <Digi />,
      },
    ],
  },
]);

export default router;
