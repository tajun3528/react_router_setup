import { Link, NavLink } from "react-router";
import Logo from "./Logo";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/our-apps", label: "Our App" },
  { to: "/contact", label: "Contacts" },
];

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <Logo />
      <nav className="hidden gap-10 text-sm md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-medium hover:text-orange-500"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-6 text-sm">
        <Link to="/login" className="font-medium hover:text-orange-500">
          Log in
        </Link>
        <Link
          to="/signup"
          className="rounded-md bg-orange-500 px-6 py-2.5 font-medium text-white hover:bg-orange-600"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}