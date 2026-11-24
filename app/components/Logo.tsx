import { Link } from "react-router";

export default function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <Link to="/" className="inline-block">
      <img
        src="/logo.png"
        alt="Epixelab"
        className={`w-auto ${className}`}
      />
    </Link>
  );
}