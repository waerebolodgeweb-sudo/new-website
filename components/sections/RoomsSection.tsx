import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    slug: "twin-room-ac",
    title: "Twin Room (AC)",
    sqm: 18,
    beds: "2 Single Beds",
    capacity: 2,
    price: "IDR 250.000",
    image: "/lodge/hero-1.jpg",
  },
  {
    slug: "double-room-fan",
    title: "Double Room (Fan)",
    sqm: 16,
    beds: "1 Double Bed",
    capacity: 2,
    price: "IDR 180.000",
    image: "/lodge/hero-2.jpg",
  },
  {
    slug: "twin-room-fan",
    title: "Twin Room (Fan)",
    sqm: 18,
    beds: "2 Single Beds",
    capacity: 2,
    price: "IDR 200.000",
    image: "/lodge/hero-3.jpg",
  },
  {
    slug: "double-room-ac",
    title: "Double Room (AC)",
    sqm: 20,
    beds: "1 Double Bed",
    capacity: 2,
    price: "IDR 280.000",
    image: "/lodge/hero-4.jpg",
  },
  {
    slug: "family-room-ac",
    title: "Family Room (AC)",
    sqm: 28,
    beds: "1 Double + 2 Single",
    capacity: 4,
    price: "IDR 420.000",
    image: "/lodge/hero-1.jpg",
  },
  {
    slug: "twin-room-deluxe",
    title: "Twin Room (Deluxe)",
    sqm: 22,
    beds: "2 Single Beds",
    capacity: 2,
    price: "IDR 320.000",
    image: "/lodge/hero-2.jpg",
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-[11px] font-semibold tracking-[0.2em] text-green-200 uppercase">
          Accommodation
        </p>
        <h2 className="mb-10 text-3xl font-bold text-neutral-900 lg:text-5xl">
          Rest Before the Ascent
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.slug}
              data-reveal
              className="overflow-hidden rounded-2xl bg-light-green-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 lg:h-48">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-base font-bold text-neutral-900">
                  {room.title}
                </h3>
                <div className="mb-4 flex gap-3 text-xs font-medium text-neutral-300">
                  <span>{room.sqm} m²</span>
                  <span>·</span>
                  <span>{room.beds}</span>
                  <span>·</span>
                  <span>{room.capacity} Guests</span>
                </div>
                <div className="flex items-center justify-between border-t border-pale-green-100/30 pt-4">
                  <div>
                    <p className="text-[10px] font-medium tracking-wide text-neutral-300 uppercase">
                      From
                    </p>
                    <p className="text-sm font-bold text-green-400">
                      {room.price}
                      <span className="text-xs font-normal text-neutral-300">
                        {" "}
                        /night
                      </span>
                    </p>
                  </div>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="button-primary rounded-full px-4 py-2 text-xs font-semibold transition-colors"
                  >
                    See Lodge Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
