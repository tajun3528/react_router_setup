import { Link } from "react-router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 pb-10 pt-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-10">
          <Logo className="text-xl" />
          <p className="text-[10px] text-indigo-950">
            © 2020 Epixelab. All rights reserved.
          </p>
        </div>

        <nav className="flex gap-8 text-[10px] text-indigo-950">
          <a href="#" className="hover:text-orange-500">Portfolio</a>
          <a href="#" className="hover:text-orange-500">How it Works</a>
          <a href="#" className="hover:text-orange-500">Pricing</a>
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/login" className="hover:text-orange-500">Login</Link>
        </nav>
      </div>

      <hr className="mt-6 border-gray-200" />
      <p className="mt-6 text-[10px] text-gray-400">
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design.
      </p>
    </footer>
  );
}