import Button from "./Button";
import RatingCard from "./RatingCard";

export default function Hero() {
  return (
    <section className="container-x grid items-center gap-10  py-10 md:grid-cols-2">
      {/* Left: text */}
      <div>
        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
          We boost growth for your startup business
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed">
          Our goal is top at the heart of creativity services industry as a
          digital creator. In has a after comment
        </p>

        <div className="mt-10 flex items-center gap-8">
          <Button>Get Started</Button>
          <button className="flex items-center gap-3 font-semibold">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-orange-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-xs text-white">
                ▶
              </span>
            </span>
            Learn More
          </button>
        </div>
      </div>

      {/* Right: photo with floating cards */}
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute inset-0 overflow-hidden rounded-full bg-gray-50 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <img
            src="/hero.jpg"
            alt="Smiling man using a phone"
            className="h-full w-full object-cover"
          />
        </div>

        <RatingCard
          className="-top-4 -left-10"
          title="100% Business Growth"
          rating="4.9"
          reviews="1520 Reviews"
          icon={
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
              ↗
            </span>
          }
        />

        <RatingCard
          className="bottom-6 -left-12"
          title="1000,000 Happy Clients"
          rating="4.9"
          reviews="15k Reviews"
        />
      </div>
    </section>
  );
}