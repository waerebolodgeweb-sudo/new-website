import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

type Tile =
  | { kind: "image"; label: string; src: string }
  | { kind: "quote" };

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
    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold drop-shadow">
        {label}
      </p>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="relative aspect-square rounded-2xl bg-neutral-900 p-5 lg:p-6 flex flex-col justify-end overflow-hidden">
      <IoArrowForwardOutline
        size={22}
        className="absolute top-5 right-5 text-pale-green-100 -rotate-45"
      />
      <h3 className="text-cream-200 text-base lg:text-lg font-bold mb-2">
        The Heart of Flores
      </h3>
      <p className="text-pale-green-100 text-[11px] lg:text-xs leading-relaxed">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Heading cell */}
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-center py-2 lg:aspect-square">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-green-200 uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight mb-3">
              Everything
              <br className="hidden lg:block" /> You Need
            </h2>
            <p className="text-xs lg:text-sm text-neutral-300 leading-relaxed mb-5">
              We handle the logistics so you can focus on the experience. Explore
              our services to make your journey to the Waerebo village
              adventurous, safe, and unforgettable.
            </p>
            <Link
              href="#contact"
              className="inline-flex w-fit px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-green-400 transition-colors"
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
