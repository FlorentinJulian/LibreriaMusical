import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar/Index";
import Navbar from "../Components/Sidebar/Navbar/Index";
import Player from "../Components/Sidebar/Player";

const Layout = () => {
  return (
    <div className="w-full h-full text-white relative">
      <Sidebar />
      <Navbar />
      <Outlet />
      <Player />
    </div>
  );
};

export default Layout;
