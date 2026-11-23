import type { ReactNode } from "react";
import Button from "./Button";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      {icon}
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-4 text-xs leading-relaxed text-gray-700">
        {description}
      </p>
      <Button size="sm" className="mt-6">
        Learn More
      </Button>
    </div>
  );
}