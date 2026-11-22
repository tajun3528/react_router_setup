import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-[#0f1b3d]">
      <Navbar />
      <Outlet />
    </div>
  );
}