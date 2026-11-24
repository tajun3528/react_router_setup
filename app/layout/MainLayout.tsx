import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="mx-auto w-full max-w-285 px-6">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}