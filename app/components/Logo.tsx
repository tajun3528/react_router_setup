import { Link } from "react-router";

export default function Logo({ className = "text-3xl" }: { className?: string }) {
  return (
    <Link to="/" className={`font-bold tracking-tight ${className}`}>
      <span className="text-orange-500">Epixe</span>
      <span className="text-slate-800">lab</span>
    </Link>
  );
}