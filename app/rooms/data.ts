/* ── Rooms data (static — no API) ── */

export type FacilityKey =
  | "wifi"
  | "tv"
  | "ac"
  | "parking"
  | "hairdryer"
  | "water"
  | "breakfast"
  | "toilet";

export type HighlightKey = "capacity" | "couples" | "bedroom" | "bathroom";

export type CardSpecKey = "people" | "ac" | "fan" | "shower" | "bed";

export interface RoomHighlight {
  key: HighlightKey;
  label: string;
}

export interface RoomCardSpec {
  key: CardSpecKey;
  label: string;
}

export interface RoomReview {
  name: string;
  location: string;
  rating: number; // out of 5
  text: string;
  avatar: string;
}

export interface Room {
  slug: string;
  title: string;
  description: string;
  price: string;
  cardSpecs: RoomCardSpec[];
  highlights: RoomHighlight[];
  facilities: FacilityKey[];
  images: string[]; // [0] is the main image
  mapImage: string;
  reviews: RoomReview[];
}

/* Reused sample guest reviews */
const baseReviews: RoomReview[] = [
  {
    name: "Al Gunster",
    location: "Italy",
    rating: 5,
    text: "Wonderful place with an amazing view. Rooms are very clean, and perfect for diving right after. The place is the food and the eating place. A kindness of the family is remarkable.",
    avatar: "https://placehold.co/80x80/27392A/F0E3D3?text=AG",
  },
  {
    name: "Julia Kytyluck",
    location: "Italy",
    rating: 5,
    text: "A unique combination of mountains, rice fields and sea. Highly recommended to visit. The owner is a great storyteller!",
    avatar: "https://placehold.co/80x80/5A7C61/F0E3D3?text=JK",
  },
  {
    name: "Rionn Marvellous",
    location: "Germany",
    rating: 5,
    text: "One of the best places to stay before the Waerebo trek — not far from the trailhead and the village.",
    avatar: "https://placehold.co/80x80/73B07C/101313?text=RM",
  },
  {
    name: "Farisa Margiati",
    location: "Indonesia",
    rating: 5,
    text: "Nicest place. It is the most relaxed lodge before the trek. The staff and dog are super friendly. The lodge is a real gem — a perfect basecamp.",
    avatar: "https://placehold.co/80x80/8B7355/F0E3D3?text=FM",
  },
];

const standardHighlights = (
  capacity: string,
  couples: string
): RoomHighlight[] => [
  { key: "capacity", label: capacity },
  { key: "couples", label: couples },
  { key: "bedroom", label: "Bedroom" },
  { key: "bathroom", label: "Bathroom" },
];

const standardFacilities: FacilityKey[] = [
  "wifi",
  "tv",
  "ac",
  "parking",
  "hairdryer",
  "water",
  "breakfast",
  "toilet",
];

const mapImage =
  "https://placehold.co/800x400/ABBAA8/27392A?text=Lodge+Location+Map";

export const rooms: Room[] = [
  {
    slug: "twin-room-ac",
    title: "Twin Room (AC)",
    description:
      "Rest comfortably before your trek in this room featuring two single beds, air conditioning, and a hot shower. Enjoy serene views of the rice fields, mountains, and far horizon — the perfect place to recharge before heading up to Wae Rebo.",
    price: "IDR 250.000",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "ac", label: "AC" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: standardFacilities,
    images: [
      "https://placehold.co/900x600/8B7355/F0E3D3?text=Twin+Room+AC",
      "https://placehold.co/300x220/7A6448/F0E3D3?text=View+1",
      "https://placehold.co/300x220/9B8265/F0E3D3?text=View+2",
      "https://placehold.co/300x220/6B5A44/F0E3D3?text=View+3",
    ],
    mapImage,
    reviews: baseReviews,
  },
  {
    slug: "double-room-fan",
    title: "Double Room (Fan)",
    description:
      "A cozy and affordable double room with one comfortable double bed and a refreshing fan. Ideal for couples seeking a simple, breezy stay close to nature, with all the lodge essentials within easy reach.",
    price: "IDR 180.000",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "fan", label: "Fan" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: ["wifi", "parking", "water", "breakfast", "toilet"],
    images: [
      "https://placehold.co/900x600/7A6448/F0E3D3?text=Double+Room+Fan",
      "https://placehold.co/300x220/8B7355/F0E3D3?text=View+1",
      "https://placehold.co/300x220/6B5A44/F0E3D3?text=View+2",
      "https://placehold.co/300x220/9B8265/F0E3D3?text=View+3",
    ],
    mapImage,
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "twin-room-fan",
    title: "Twin Room (Fan)",
    description:
      "Two single beds and a cooling fan make this room a great pick for friends trekking together. Wake to the sound of Flores birds and the morning mist rolling over the rice paddies just outside your window.",
    price: "IDR 200.000",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "fan", label: "Fan" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: standardHighlights("2 Person", "Great for friends & trekkers"),
    facilities: [
      "wifi",
      "parking",
      "hairdryer",
      "water",
      "breakfast",
      "toilet",
    ],
    images: [
      "https://placehold.co/900x600/9B8265/F0E3D3?text=Twin+Room+Fan",
      "https://placehold.co/300x220/7A6448/F0E3D3?text=View+1",
      "https://placehold.co/300x220/8B7355/F0E3D3?text=View+2",
      "https://placehold.co/300x220/5A4A38/F0E3D3?text=View+3",
    ],
    mapImage,
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "double-room-ac",
    title: "Double Room (AC)",
    description:
      "A spacious double room with a plush double bed, air conditioning, and a private hot shower. The most relaxing way to unwind after the descent, with sweeping views of the surrounding highlands.",
    price: "IDR 280.000",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "ac", label: "AC" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: standardFacilities,
    images: [
      "https://placehold.co/900x600/6B5A44/F0E3D3?text=Double+Room+AC",
      "https://placehold.co/300x220/8B7355/F0E3D3?text=View+1",
      "https://placehold.co/300x220/7A6448/F0E3D3?text=View+2",
      "https://placehold.co/300x220/9B8265/F0E3D3?text=View+3",
    ],
    mapImage,
    reviews: baseReviews,
  },
  {
    slug: "family-room-ac",
    title: "Family Room (AC)",
    description:
      "Our largest room comfortably sleeps a family of four with a double bed and two singles, air conditioning, and a generous hot-water bathroom. Plenty of space to gather, relax, and plan the next day's adventure together.",
    price: "IDR 420.000",
    cardSpecs: [
      { key: "people", label: "4 Person" },
      { key: "ac", label: "AC" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: [
      { key: "capacity", label: "4 Person" },
      { key: "couples", label: "Perfect for families" },
      { key: "bedroom", label: "Bedroom" },
      { key: "bathroom", label: "Bathroom" },
    ],
    facilities: standardFacilities,
    images: [
      "https://placehold.co/900x600/5A4A38/F0E3D3?text=Family+Room+AC",
      "https://placehold.co/300x220/8B7355/F0E3D3?text=View+1",
      "https://placehold.co/300x220/6B5A44/F0E3D3?text=View+2",
      "https://placehold.co/300x220/7A6448/F0E3D3?text=View+3",
    ],
    mapImage,
    reviews: baseReviews,
  },
  {
    slug: "twin-room-deluxe",
    title: "Twin Room (Deluxe)",
    description:
      "Our premium twin room with upgraded bedding, air conditioning, a hot shower, and the best panoramic view in the lodge. A little extra comfort for travelers who want to wake up to the mountains in style.",
    price: "IDR 320.000",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "ac", label: "AC" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: standardFacilities,
    images: [
      "https://placehold.co/900x600/27392A/F0E3D3?text=Twin+Room+Deluxe",
      "https://placehold.co/300x220/304534/F0E3D3?text=View+1",
      "https://placehold.co/300x220/5A7C61/F0E3D3?text=View+2",
      "https://placehold.co/300x220/73B07C/101313?text=View+3",
    ],
    mapImage,
    reviews: baseReviews,
  },
];

export function getRoom(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}
