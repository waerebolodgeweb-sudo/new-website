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

const fanCardSpecs: RoomCardSpec[] = [
  { key: "people", label: "2 Person" },
  { key: "fan", label: "Fan" },
];

const acCardSpecs: RoomCardSpec[] = [
  { key: "people", label: "2 Person" },
  { key: "ac", label: "AC" },
  { key: "shower", label: "Hot Water" },
];

export const rooms: Room[] = [
  /* ── Standard (Fan) ── */
  {
    slug: "standard-twin-1",
    title: "Standard Twin 1",
    description:
      "Two single beds cooled by a fan, with a private bathroom featuring a shower and traditional bucket bath. Simple, clean, and everything you need for a good rest before your ascent to Wae Rebo.",
    cardSpecs: fanCardSpecs,
    highlights: standardHighlights("2 Person", "Great for friends & trekkers"),
    facilities: fanFacilities,
    images: ["/lodge/rooms/standard-twin-1.jpg"],
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "standard-double",
    title: "Standard Double",
    description:
      "One double bed cooled by a fan, with a private bathroom featuring a shower and traditional bucket bath. A cozy, affordable option for couples who enjoy the natural highland breeze.",
    cardSpecs: fanCardSpecs,
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: fanFacilities,
    images: ["/lodge/rooms/standard-double.jpg"],
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "standard-twin-2",
    title: "Standard Twin 2",
    description:
      "Two single beds cooled by a fan, with a private bathroom featuring a shower and traditional bucket bath. Bright and simple, with easy access to the lodge's shared spaces.",
    cardSpecs: fanCardSpecs,
    highlights: standardHighlights("2 Person", "Great for friends & trekkers"),
    facilities: fanFacilities,
    images: ["/lodge/rooms/standard-twin-2.jpg"],
    reviews: baseReviews.slice(0, 3),
  },

  /* ── Wooden (Fan) ── */
  {
    slug: "wooden-twin-1",
    title: "Wooden Twin 1",
    description:
      "Two single beds inside a room finished in warm timber, cooled by a fan with a private shower bathroom. A rustic, characterful stay that carries the feel of the highlands indoors.",
    cardSpecs: fanCardSpecs,
    highlights: standardHighlights("2 Person", "Great for friends & trekkers"),
    facilities: fanFacilities,
    images: ["/lodge/rooms/wooden-twin-1.jpg"],
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-2",
    title: "Wooden Twin 2",
    description:
      "Two single beds inside a room finished in warm timber, cooled by a fan with a private shower bathroom. Quiet and cozy, with a view over the surrounding greenery.",
    cardSpecs: fanCardSpecs,
    highlights: standardHighlights("2 Person", "Great for friends & trekkers"),
    facilities: fanFacilities,
    images: ["/lodge/rooms/wooden-twin-2.jpg"],
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-3",
    title: "Wooden Twin 3",
    description:
      "Two single beds inside a room finished in warm timber, cooled by a fan with a private shower bathroom. A relaxed, no-frills base for your night before the trek.",
    cardSpecs: fanCardSpecs,
    highlights: standardHighlights("2 Person", "Great for friends & trekkers"),
    facilities: fanFacilities,
    images: ["/lodge/rooms/wooden-twin-3.jpg"],
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-double",
    title: "Wooden Double",
    description:
      "One double bed inside a room finished in warm timber, cooled by a fan with a private shower bathroom. A warm, homely option for couples travelling together.",
    cardSpecs: fanCardSpecs,
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: fanFacilities,
    images: ["/lodge/rooms/wooden-double.jpg"],
    reviews: baseReviews.slice(0, 3),
  },

  /* ── Deluxe (AC + Hot Water) ── */
  {
    slug: "deluxe-double-1",
    title: "Deluxe Double 1",
    description:
      "A spacious double room with air conditioning and a private hot shower. The most relaxing way to unwind after the descent, with the best comfort the lodge has to offer.",
    cardSpecs: acCardSpecs,
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: acFacilities,
    images: ["/lodge/rooms/deluxe-double-1.jpg"],
    reviews: baseReviews,
  },
  {
    slug: "deluxe-double-2",
    title: "Deluxe Double 2",
    description:
      "A spacious double room with air conditioning and a private hot shower. Wind down in comfort, with cool air and warm water ready whenever you need them.",
    cardSpecs: acCardSpecs,
    highlights: standardHighlights("2 Person", "Perfect for traveling couples"),
    facilities: acFacilities,
    images: ["/lodge/rooms/deluxe-double-2.jpg"],
    reviews: baseReviews,
  },
  {
    slug: "deluxe-twin-1",
    title: "Deluxe Twin 1",
    description:
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for a well-rested start to your trek — cool air and warm water to recharge after the journey to Dintor.",
    cardSpecs: acCardSpecs,
    highlights: standardHighlights("2 Person", "Perfect for trekking partners"),
    facilities: acFacilities,
    images: ["/lodge/rooms/deluxe-twin-1.jpg"],
    reviews: baseReviews,
  },
  {
    slug: "deluxe-twin-2",
    title: "Deluxe Twin 2",
    description:
      "Two single beds with air conditioning and a private hot shower. Cool, quiet, and comfortable — a solid rest before or after your climb to Wae Rebo.",
    cardSpecs: acCardSpecs,
    highlights: standardHighlights("2 Person", "Perfect for trekking partners"),
    facilities: acFacilities,
    images: ["/lodge/rooms/deluxe-twin-2.jpg"],
    reviews: baseReviews,
  },
];

export function getRoom(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}
