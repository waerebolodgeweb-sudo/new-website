/* ── Rooms data (static — no API) ── */

export type FacilityKey =
  | "wifi"
  | "ac"
  | "hotShower"
  | "parking"
  | "amenities"
  | "breakfast"
  | "dinner"
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
  cardSpecs: RoomCardSpec[];
  highlights: RoomHighlight[];
  facilities: FacilityKey[];
  images: string[]; // [0] is the main image
  reviews: RoomReview[];
}

/* Reused sample guest reviews */
const baseReviews: RoomReview[] = [
  {
    name: "Al Gunster",
    location: "Italy",
    rating: 5,
    text: "Wonderful place with an amazing view. Rooms are very clean, and perfect for diving right after. The place is the food and the eating place. A kindness of the family is remarkable.",
    avatar: "/home/review-1.jpg",
  },
  {
    name: "Julia Kytyluck",
    location: "Italy",
    rating: 5,
    text: "A unique combination of mountains, rice fields and sea. Highly recommended to visit. The owner is a great storyteller!",
    avatar: "/home/review-2.jpg",
  },
  {
    name: "Rionn Marvellous",
    location: "Germany",
    rating: 5,
    text: "One of the best places to stay before the Waerebo trek — not far from the trailhead and the village.",
    avatar: "/home/review-3.jpg",
  },
  {
    name: "Farisa Margiati",
    location: "Indonesia",
    rating: 5,
    text: "Nicest place. It is the most relaxed lodge before the trek. The staff and dog are super friendly. The lodge is a real gem — a perfect basecamp.",
    avatar: "/home/review-4.jpg",
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

/* Fan room facilities — no hot shower, no AC */
const fanFacilities: FacilityKey[] = [
  "wifi",
  "parking",
  "amenities",
  "breakfast",
  "dinner",
  "toilet",
];

/* AC room facilities — with hot shower and AC */
const acFacilities: FacilityKey[] = [
  "wifi",
  "ac",
  "hotShower",
  "parking",
  "amenities",
  "breakfast",
  "dinner",
  "toilet",
];

export const rooms: Room[] = [
  {
    slug: "twin-room-ac",
    title: "Twin Room (AC)",
    description:
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for a well-rested start to your trek — cool air and warm water to recharge after the long journey to Dintor.",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "ac", label: "AC" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: standardHighlights("2 Person", "Perfect for trekking partners"),
    facilities: acFacilities,
    images: [
      "/lodge/hero-1.jpg",
      "/lodge/hero-2.jpg",
      "/lodge/hero-3.jpg",
      "/lodge/hero-4.jpg",
    ],
    reviews: baseReviews,
  },
  {
    slug: "double-room-ac",
    title: "Double Room (AC)",
    description:
      "One double bed with air conditioning and a private hot shower. Wind down after your adventure in comfort, with cool air and warm water ready whenever you need them.",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "ac", label: "AC" },
      { key: "shower", label: "Hot Shower" },
    ],
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: acFacilities,
    images: [
      "/lodge/hero-4.jpg",
      "/lodge/hero-1.jpg",
      "/lodge/hero-2.jpg",
      "/lodge/hero-3.jpg",
    ],
    reviews: baseReviews,
  },
  {
    slug: "twin-room-fan",
    title: "Twin Room (Fan)",
    description:
      "Two single beds cooled by a fan, with a private bathroom featuring a shower and traditional bucket bath. Simple, clean, and everything you need for a good rest before your ascent to Wae Rebo.",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "fan", label: "Fan" },
      { key: "shower", label: "Shower" },
    ],
    highlights: standardHighlights("2 Person", "Great for friends & trekkers"),
    facilities: fanFacilities,
    images: [
      "/lodge/hero-3.jpg",
      "/lodge/hero-1.jpg",
      "/lodge/hero-2.jpg",
      "/lodge/hero-4.jpg",
    ],
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "double-room-fan",
    title: "Double Room (Fan)",
    description:
      "One double bed cooled by a fan, with a private bathroom featuring a shower and traditional bucket bath. A cozy, affordable option for couples who enjoy the natural highland breeze.",
    cardSpecs: [
      { key: "people", label: "2 Person" },
      { key: "fan", label: "Fan" },
      { key: "shower", label: "Shower" },
    ],
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: fanFacilities,
    images: [
      "/lodge/hero-2.jpg",
      "/lodge/hero-1.jpg",
      "/lodge/hero-3.jpg",
      "/lodge/hero-4.jpg",
    ],
    reviews: baseReviews.slice(0, 3),
  },
];

export function getRoom(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}
