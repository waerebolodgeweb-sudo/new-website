import Image from "next/image";

const banner =
  "https://placehold.co/1432x400/27392A/ABBAA8?text=Waerebo+Highlands";

/* Placeholder copy — swap with real history when available */
const milestones = [
  {
    year: "2011",
    title: "Where It All Began",
    text: "Inspired by community-based ecotourism, Martin and Isabela laid the first stones of Waerebo Lodge — a humble resting place at the foot of the trail.",
    img: "https://placehold.co/832x480/5A7C61/F0E3D3?text=2011",
  },
  {
    year: "2022",
    title: "Growing With the Village",
    text: "As more travelers discovered Wae Rebo, the lodge grew alongside the community — adding comfortable rooms, a kitchen, and trusted local guides.",
    img: "https://placehold.co/832x480/7A6448/F0E3D3?text=2022",
  },
  {
    year: "2026",
    title: "A Living Gateway to the Clouds",
    text: "Today the lodge welcomes guests from around the world, giving back to the Waerebo community while offering the perfect basecamp before the ascent.",
    img: "https://placehold.co/832x480/304534/ABBAA8?text=2026",
  },
];

export default function HistorySection() {
  return (
    <section id="history" className="bg-light-green-100 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="relative h-52 lg:h-96 rounded-3xl overflow-hidden shadow-sm mb-10 lg:mb-14">
          <Image src={banner} alt="Waerebo highlands" fill className="object-cover" />
        </div>

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-12 mb-10 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
            Our History
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed lg:pt-2">
            From a single shelter at the trailhead to a beloved basecamp — a look
            back at the milestones that shaped Waerebo Lodge and its bond with the
            community.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 lg:space-y-20">
          {milestones.map((m, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={m.year}
                className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center"
              >
                <div
                  className={`relative h-56 lg:h-96 rounded-3xl overflow-hidden shadow-sm ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image src={m.img} alt={m.title} fill className="object-cover" />
                </div>
                <div className={reversed ? "lg:order-1" : ""}>
                  <p className="text-lg font-bold text-green-200 mb-1">{m.year}</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
                    {m.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
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
