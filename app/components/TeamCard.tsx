import type { ReactNode } from "react";

type TeamCardProps = {
  photo: string;
  name: string;
  role: string;
  socials: { label: string; href: string; icon: ReactNode }[];
};

export default function TeamCard({ photo, name, role, socials }: TeamCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="flex flex-col items-center px-6 pb-6 pt-7">
        <img
          src={photo}
          alt={name}
          className="h-14 w-14 rounded-full bg-gray-200 object-cover"
        />
        <h3 className="mt-4 text-sm font-medium text-indigo-950">{name}</h3>
        <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-gray-400">
          {role}
        </p>
      </div>

      <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-200">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={`${name} on ${s.label}`}
            className="flex justify-center py-3 text-gray-400 hover:text-orange-500"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
}