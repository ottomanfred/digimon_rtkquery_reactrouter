import { RouterProvider } from "react-router-dom";
import router from "./router";

import "./App.css";

export default function App() {
  // <RouterProvider> will render the element based on the routes
  // as defined in the `router` variable
  return <RouterProvider router={router} />;
}
