import Image from "next/image";

const banner = "/about/story-left.jpg";

/* Placeholder copy — swap with real history when available */
const milestones = [
  {
    year: "2011",
    title: "Where It All Began",
    text: "Inspired by community-based ecotourism, Martin and Isabela laid the first stones of Waerebo Lodge — a humble resting place at the foot of the trail.",
    img: "/trip/stop-1.jpg",
  },
  {
    year: "2022",
    title: "Growing With the Village",
    text: "As more travelers discovered Wae Rebo, the lodge grew alongside the community — adding comfortable rooms, a kitchen, and trusted local guides.",
    img: "/lodge/hero-1.jpg",
  },
  {
    year: "2026",
    title: "A Living Gateway to the Clouds",
    text: "Today the lodge welcomes guests from around the world, giving back to the Waerebo community while offering the perfect basecamp before the ascent.",
    img: "/about/story-mid.jpg",
  },
];

export default function HistorySection() {
  return (
    <section id="history" className="bg-light-green-100 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="relative mb-10 h-52 overflow-hidden rounded-3xl shadow-sm lg:mb-14 lg:h-96">
          <Image
            src={banner}
            alt="Waerebo highlands"
            fill
            className="object-cover"
          />
        </div>

        {/* Section header */}
        <div className="mb-10 grid gap-3 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          <h2 className="text-3xl font-bold text-neutral-900 lg:text-5xl">
            Our History
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300 lg:pt-2">
            From a single shelter at the trailhead to a beloved basecamp — a
            look back at the milestones that shaped Waerebo Lodge and its bond
            with the community.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 lg:space-y-20">
          {milestones.map((m, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={m.year}
                data-reveal
                className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`relative h-56 overflow-hidden rounded-3xl shadow-sm lg:h-96 ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={reversed ? "lg:order-1" : ""}>
                  <p className="mb-1 text-lg font-bold text-green-200">
                    {m.year}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 lg:text-2xl">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {m.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
