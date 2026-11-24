import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    avatar: "/avatars/rayhan.jpg",
    quote:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    name: "Rayhan Curran",
  },
  {
    avatar: "/avatars/kayley.jpg",
    quote:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    name: "Kayley Frame",
  },
  {
    avatar: "/avatars/gene.jpg",
    quote:
      "The most important part of the Startup Framework is the samples",
    name: "Gene Whitfield",
  },
  {
    avatar: "/avatars/allan.jpg",
    quote:
      "I've built my website with Startup just in one day, and it was ready-to-go.",
    name: "Allan Kim",
  },
];

export default function Testimonials() {
  return (
    <section className="container-x  py-16">
      <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-500">
        Testimonials
      </p>
      <h2 className="mt-2 text-center text-3xl font-bold">
        What Clients say about us
      </h2>

      <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2 md:justify-items-center">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}