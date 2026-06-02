import Image from "next/image";

/* Staggered hero collage — three images at different heights */
const collage = [
  {
    src: "https://placehold.co/440x800/5A7C61/F0E3D3?text=Rice+Fields",
    alt: "Rice fields of the Flores valley",
  },
  {
    src: "https://placehold.co/720x640/7A6448/F0E3D3?text=Mbaru+Niang",
    alt: "Traditional cone-shaped Mbaru Niang house",
  },
  {
    src: "https://placehold.co/600x760/27392A/F0E3D3?text=Mr.+Martin",
    alt: "Mr. Martin, dedicated local guide",
  },
];

export default function StorySection() {
  return (
    <section id="story" className="bg-white pt-8 pb-12 lg:pt-14 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-14 items-center">
          {/* Image collage */}
          <div className="flex gap-3 sm:gap-5 items-start">
            <div className="relative w-1/4 h-52 sm:h-72 lg:h-80 mt-6 sm:mt-10 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
              <Image
                src={collage[0].src}
                alt={collage[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-2/5 h-48 sm:h-64 lg:h-72 mt-12 sm:mt-20 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={collage[1].src}
                alt={collage[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="relative w-full h-52 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={collage[2].src}
                  alt={collage[2].alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-neutral-900 mt-3">Mr. Martin</p>
              <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed mt-1">
                Mr. Martin was born in Waerebo in 1969 and has been a dedicated
                local guide since 2003. His wife, Isabela, is the general manager
                who loves cooking and is always excited to try recipes from her
                guests&apos; home countries!
              </p>
            </div>
          </div>

          {/* Story text */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-5">
              The Story
              <br />
              Behind the Lodge
            </h1>
            <p className="text-sm lg:text-base text-neutral-300 leading-relaxed">
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
