export default function Home() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-2">
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
          <button className="rounded-md bg-orange-500 px-8 py-3.5 font-medium text-white hover:bg-orange-600">
            Get Started
          </button>
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

      {/* Right: photo in circle with floating cards */}
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute inset-0 overflow-hidden rounded-full bg-gray-50 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <img
            src="/hero.png"
            alt="Smiling man using a phone"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -top-4 -left-10 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
            ↗
          </span>
          <div>
            <p className="text-xs font-bold">100% Business Growth</p>
            <p className="text-xs text-gray-500">
              <span className="text-yellow-500">★</span> 4.9 (1520 Reviews)
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 -left-12 rounded-xl bg-white px-4 py-3 shadow-lg">
          <p className="text-xs font-bold">1000,000 Happy Clients</p>
          <p className="text-xs text-gray-500">
            <span className="text-yellow-500">★</span> 4.9 (15k Reviews)
          </p>
        </div>
      </div>
    </section>
  );
}