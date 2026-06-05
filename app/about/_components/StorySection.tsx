import Image from "next/image";

/* Staggered hero collage — three images at different heights */
const collage = [
  {
    src: "/about/story-left.jpg",
    alt: "Rice fields of the Flores valley",
  },
  {
    src: "/about/story-mid.jpg",
    alt: "Traditional cone-shaped Mbaru Niang house",
  },
  {
    src: "/about/story-right.jpg",
    alt: "Mr. Martin, dedicated local guide",
  },
];

export default function StorySection() {
  return (
    <section id="story" className="bg-white pt-8 pb-12 lg:pt-14 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          {/* Image collage */}
          <div className="flex items-start gap-3 sm:gap-5">
            <div className="relative mt-6 h-52 w-1/4 flex-shrink-0 overflow-hidden rounded-2xl shadow-sm sm:mt-10 sm:h-72 lg:h-80">
              <Image
                src={collage[0].src}
                alt={collage[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-12 h-48 w-2/5 overflow-hidden rounded-2xl shadow-sm sm:mt-20 sm:h-64 lg:h-72">
              <Image
                src={collage[1].src}
                alt={collage[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="relative h-52 w-full overflow-hidden rounded-2xl shadow-sm sm:h-72 lg:h-80">
                <Image
                  src={collage[2].src}
                  alt={collage[2].alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-neutral-900">
                Mr. Martin
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-300 sm:text-xs">
                Mr. Martin was born in Waerebo in 1969 and has been a dedicated
                local guide since 2003. His wife, Isabela, is the general
                manager who loves cooking and is always excited to try recipes
                from her guests&apos; home countries!
              </p>
            </div>
          </div>

          {/* Story text */}
          <div>
            <h1 className="mb-5 text-3xl leading-tight font-bold text-neutral-900 lg:text-5xl">
              The Story
              <br />
              Behind the Lodge
            </h1>
            <p className="text-sm leading-relaxed text-neutral-300 lg:text-base">
              Sincere greetings from the heart of Flores. We are Martin and
              Isabela Anggo, and we built Waerebo Lodge after being inspired by
              community-based ecotourism in 2007. Our goal is to provide a
              comfortable resting place for travelers while giving back to the
              Waerebo community. Come and take a break with us before your
              ascent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
