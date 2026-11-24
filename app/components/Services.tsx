import ServiceCard from "./ServiceCard";
import { ChartIcon, GrowthIcon, VideoIcon } from "./icons";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.";

const services = [
  { icon: <GrowthIcon />, title: "Graphic Design", description: lorem },
  { icon: <VideoIcon />, title: "Video Editing", description: lorem },
  { icon: <ChartIcon />, title: "Digital Marketing", description: lorem },
];

export default function Services() {
  return (
    <section className="container-x  py-16">
      <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-500">
        Service
      </p>
      <h2 className="mt-2 text-center text-3xl font-bold">
        Our Vision &amp; Our Goal
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}