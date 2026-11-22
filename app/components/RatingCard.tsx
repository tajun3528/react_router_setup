import type { ReactNode } from "react";

type RatingCardProps = {
  title: string;
  rating: string;
  reviews: string;
  icon?: ReactNode;
  className?: string;
};

export default function RatingCard({
  title,
  rating,
  reviews,
  icon,
  className = "",
}: RatingCardProps) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg ${className}`}
    >
      {icon}
      <div>
        <p className="text-xs font-bold">{title}</p>
        <p className="text-xs text-gray-500">
          <span className="text-yellow-500">★</span> {rating} ({reviews})
        </p>
      </div>
    </div>
  );
}