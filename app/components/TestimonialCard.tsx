type TestimonialCardProps = {
  avatar: string;
  quote: string;
  name: string;
};

export default function TestimonialCard({
  avatar,
  quote,
  name,
}: TestimonialCardProps) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={avatar}
        alt={name}
        className="h-10 w-10 shrink-0 rounded-md bg-gray-200 object-cover"
      />
      <div className="max-w-[16rem]">
        <p className="text-xs leading-relaxed">{quote}</p>
        <p className="mt-6 text-[10px] font-medium uppercase tracking-widest text-gray-400">
          {name}
        </p>
      </div>
    </div>
  );
}