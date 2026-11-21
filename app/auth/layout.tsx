import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-semibold">Account</h2>
      <Outlet />
    </div>
  );
}
