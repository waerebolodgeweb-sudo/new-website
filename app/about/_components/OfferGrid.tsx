import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

type Tile = { kind: "image"; label: string; src: string } | { kind: "quote" };

/* Bento order: heading occupies cell 1, then these 11 tiles fill the grid */
const tiles: Tile[] = [
  {
    kind: "image",
    label: "Waerebo Village",
    src: "https://placehold.co/400x400/27392A/F0E3D3?text=Waerebo+Village",
  },
  { kind: "quote" },
  {
    kind: "image",
    label: "Pleas Waterfall",
    src: "https://placehold.co/400x400/5A7C61/F0E3D3?text=Pleas+Waterfall",
  },
  {
    kind: "image",
    label: "Waerebo Lodge",
    src: "https://placehold.co/400x400/7A6448/F0E3D3?text=Waerebo+Lodge",
  },
  {
    kind: "image",
    label: "Rice Terraces",
    src: "https://placehold.co/400x400/73B07C/101313?text=Rice+Terraces",
  },
  {
    kind: "image",
    label: "Hobbit Cave",
    src: "https://placehold.co/400x400/304534/F0E3D3?text=Hobbit+Cave",
  },
  {
    kind: "image",
    label: "Waerebo House",
    src: "https://placehold.co/400x400/27392A/ABBAA8?text=Waerebo+House",
  },
  {
    kind: "image",
    label: "Double Bed",
    src: "https://placehold.co/400x400/8B7355/F0E3D3?text=Double+Bed",
  },
  {
    kind: "image",
    label: "Nusa Molas Boat Trip",
    src: "https://placehold.co/400x400/5A7C61/F0E3D3?text=Nusa+Molas",
  },
  {
    kind: "image",
    label: "Flores Sea",
    src: "https://placehold.co/400x400/304534/ABBAA8?text=Flores+Sea",
  },
  {
    kind: "image",
    label: "Waerebo Restaurant",
    src: "https://placehold.co/400x400/6B5A44/F0E3D3?text=Restaurant",
  },
];

function ImageTile({ label, src }: { label: string; src: string }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm">
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p className="absolute right-3 bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
        {label}
      </p>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 p-5 lg:p-6">
      <IoArrowForwardOutline
        size={22}
        className="absolute top-5 right-5 -rotate-45 text-pale-green-100"
      />
      <h3 className="mb-2 text-base font-bold text-cream-200 lg:text-lg">
        The Heart of Flores
      </h3>
      <p className="text-[11px] leading-relaxed text-pale-green-100 lg:text-xs">
        &ldquo;More than just a beautiful destination, it is a profound
        connection to the past. Walk our trails, share our authentic coffee, and
        sleep under the starlit sky of our ancestral home.&rdquo;
      </p>
    </div>
  );
}

export default function OfferGrid() {
  return (
    <section id="offer" className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {/* Heading cell */}
          <div className="col-span-2 flex flex-col justify-center py-2 lg:col-span-1 lg:aspect-square">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-green-200 uppercase">
              Our Services
            </p>
            <h2 className="mb-3 text-2xl leading-tight font-bold text-neutral-900 lg:text-3xl">
              Everything
              <br className="hidden lg:block" /> You Need
            </h2>
            <p className="mb-5 text-xs leading-relaxed text-neutral-300 lg:text-sm">
              We handle the logistics so you can focus on the experience.
              Explore our services to make your journey to the Waerebo village
              adventurous, safe, and unforgettable.
            </p>
            <Link
              href="#contact"
              className="inline-flex w-fit rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-400"
            >
              Contact Us
            </Link>
          </div>

          {/* Tiles */}
          {tiles.map((tile, i) =>
            tile.kind === "quote" ? (
              <QuoteCard key={i} />
            ) : (
              <ImageTile key={i} label={tile.label} src={tile.src} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
