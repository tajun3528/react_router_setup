import { Link, NavLink, Outlet } from "react-router";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/our-apps", label: "Our App" },
  { to: "/contact", label: "Contacts" },
];

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-[#0f1b3d]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          <span className="text-orange-500">E</span>
          <span className="text-green-600">pixe</span>
          <span className="text-slate-800">lab</span>
        </Link>

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

      <Outlet />
    </div>
  );
}