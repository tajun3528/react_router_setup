import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex gap-4 bg-white p-4 shadow">
        <Link to="/" className="font-medium hover:text-indigo-600">Home</Link>
        <Link to="/about" className="font-medium hover:text-indigo-600">About</Link>
        <Link to="/our-apps" className="font-medium hover:text-indigo-600">Our Apps</Link>
        <Link to="/contact" className="font-medium hover:text-indigo-600">Contact</Link>
      </nav>
      <main className="mx-auto max-w-5xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
