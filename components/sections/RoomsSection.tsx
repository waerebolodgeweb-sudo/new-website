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
    image: "https://placehold.co/600x400/8B7355/F0E3D3?text=Twin+Room+AC",
  },
  {
    slug: "double-room-fan",
    title: "Double Room (Fan)",
    sqm: 16,
    beds: "1 Double Bed",
    capacity: 2,
    price: "IDR 180.000",
    image: "https://placehold.co/600x400/7A6448/F0E3D3?text=Double+Fan",
  },
  {
    slug: "twin-room-fan",
    title: "Twin Room (Fan)",
    sqm: 18,
    beds: "2 Single Beds",
    capacity: 2,
    price: "IDR 200.000",
    image: "https://placehold.co/600x400/9B8265/F0E3D3?text=Twin+Room",
  },
  {
    slug: "double-room-ac",
    title: "Double Room (AC)",
    sqm: 20,
    beds: "1 Double Bed",
    capacity: 2,
    price: "IDR 280.000",
    image: "https://placehold.co/600x400/6B5A44/F0E3D3?text=Double+AC",
  },
  {
    slug: "family-room-ac",
    title: "Family Room (AC)",
    sqm: 28,
    beds: "1 Double + 2 Single",
    capacity: 4,
    price: "IDR 420.000",
    image: "https://placehold.co/600x400/7A6448/F0E3D3?text=Family+Room",
  },
  {
    slug: "twin-room-deluxe",
    title: "Twin Room (Deluxe)",
    sqm: 22,
    beds: "2 Single Beds",
    capacity: 2,
    price: "IDR 320.000",
    image: "https://placehold.co/600x400/5A4A38/F0E3D3?text=Twin+Deluxe",
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-lodge-mid uppercase mb-2">
          Accommodation
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-lodge-dark mb-10">
          Rest Before the Ascent.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.slug}
              className="bg-lodge-warm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                <h3 className="text-base font-bold text-lodge-dark mb-2">
                  {room.title}
                </h3>
                <div className="flex gap-3 text-xs text-lodge-neutral font-medium mb-4">
                  <span>{room.sqm} m²</span>
                  <span>·</span>
                  <span>{room.beds}</span>
                  <span>·</span>
                  <span>{room.capacity} Guests</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-lodge-pale/30">
                  <div>
                    <p className="text-[10px] text-lodge-neutral uppercase tracking-wide font-medium">
                      From
                    </p>
                    <p className="text-lodge-green font-bold text-sm">
                      {room.price}
                      <span className="text-lodge-neutral font-normal text-xs">
                        {" "}
                        /night
                      </span>
                    </p>
                  </div>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="px-4 py-2 bg-lodge-dark text-white text-xs font-semibold rounded-full hover:bg-lodge-green transition-colors"
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
