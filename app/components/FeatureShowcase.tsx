export default function FeatureShowcase() {
  return (
    <section className="mx-auto grid max-w-5xl items-stretch gap-10 px-6 py-16 md:grid-cols-[1fr_1.5fr]">
      <div className="flex flex-col justify-between gap-10">
        <div>
          <h3 className="text-sm font-bold text-indigo-900">
            Many Blocks and Components
          </h3>
          <p className="mt-4 max-w-[16rem] text-xs leading-relaxed text-gray-400">
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design.
          </p>
        </div>
        <button className="w-fit rounded-full border border-gray-300 px-6 py-1.5 text-xs font-medium hover:border-orange-500 hover:text-orange-500">
          Explore
        </button>
      </div>

      <div className="relative overflow-hidden rounded-lg">
        <img
          src="/showcase.jpg"
          alt="Colorful chair on a pink wall"
          className="h-72 w-full object-cover"
        />
        <button
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700"
        >
          ▶
        </button>
      </div>
    </section>
  );
}