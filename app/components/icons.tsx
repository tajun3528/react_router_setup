export function GrowthIcon() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="15 7 21 7 21 13" />
      </svg>
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-black" />
    </span>
  );
}

export function VideoIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-black" fill="currentColor">
      <rect x="4" y="12" width="28" height="24" rx="6" />
      <path d="M36 21l8-5v16l-8-5z" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <rect x="5" y="11" width="3" height="8" rx="1" />
        <rect x="10.5" y="5" width="3" height="14" rx="1" />
        <rect x="16" y="9" width="3" height="10" rx="1" />
      </svg>
    </span>
  );
}