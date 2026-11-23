import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-[#0f1b3d]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}