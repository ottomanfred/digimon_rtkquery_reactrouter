import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <div className="app_container">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}