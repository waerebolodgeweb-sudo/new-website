export type FacilityKey =
  | "wifi"
  | "ac"
  | "fan"
  | "shower"
  | "hotShower"
  | "parking"
  | "westernToilet"
  | "mosquitoNet"
  | "washBasin"
  | "waterTub"
  | "towel"
  | "toothbrush"
  | "soap"
  | "amenities"
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
  rating: number;
  text: string;
  avatar: string;
}

export interface Room {
  slug: string;
  title: string;
  cardTitle?: string;
  cardImage?: string;
  description: string;
  cardSpecs: RoomCardSpec[];
  highlights: RoomHighlight[];
  facilities: FacilityKey[];
  images: string[];
  reviews: RoomReview[];
}

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
    text: "One of the best places to stay before the Waerebo trek - not far from the trailhead and the village.",
    avatar: "/home/review-3.jpg",
  },
  {
    name: "Farisa Margiati",
    location: "Indonesia",
    rating: 5,
    text: "Nicest place. It is the most relaxed lodge before the trek. The staff are super friendly. The lodge is a real gem - a perfect basecamp.",
    avatar: "/home/review-4.jpg",
  },
];

const roomHighlights = (
  audience: string,
  bed: string,
  bathroom = "Private Bathroom"
): RoomHighlight[] => [
  { key: "capacity", label: "2 Guests" },
  { key: "couples", label: audience },
  { key: "bedroom", label: bed },
  { key: "bathroom", label: bathroom },
];

const numberedGallery = (slug: string) =>
  Array.from(
    { length: 6 },
    (_, index) => `/lodge/rooms/${slug}/${index + 1}.jpg`
  );

const deluxeDouble1Gallery = [
  "/lodge/rooms/deluxe-double-1/IMG_2181 1.png",
  "/lodge/rooms/deluxe-double-1/IMG_2497 1.png",
  "/lodge/rooms/deluxe-double-1/IMG_4609 1.png",
  "/lodge/rooms/deluxe-double-1/IMG_4610 1.png",
  "/lodge/rooms/deluxe-double-1/IMG_4611 1.png",
  "/lodge/rooms/deluxe-double-1/IMG_4612 1.png",
];

const deluxeDouble2Gallery = [
  "/lodge/rooms/deluxe-double-2/IMG_0204 1.png",
  "/lodge/rooms/deluxe-double-2/IMG_0209 1.png",
  "/lodge/rooms/deluxe-double-2/IMG_20240228_160811 1.png",
  "/lodge/rooms/deluxe-double-2/IMG_7358 1.png",
  "/lodge/rooms/deluxe-double-2/IMG_7359 1.png",
  "/lodge/rooms/deluxe-double-2/Salinan dji_fly_20260602_140828_0306_1780382022377_photo 1.png",
];

const deluxeTwin1Gallery = [
  "/lodge/rooms/deluxe-twin-1/IMG_4566 1.png",
  "/lodge/rooms/deluxe-twin-1/IMG_4570 1.png",
  "/lodge/rooms/deluxe-twin-1/IMG_4574 1.png",
  "/lodge/rooms/deluxe-twin-1/IMG_4575 1.png",
  "/lodge/rooms/deluxe-twin-1/IMG_4576 1.png",
  "/lodge/rooms/deluxe-twin-1/IMG_4577 1.png",
];

const deluxeTwin2Gallery = [
  "/lodge/rooms/deluxe-twin-2/IMG_0189 1.png",
  "/lodge/rooms/deluxe-twin-2/IMG_0194 1.png",
  "/lodge/rooms/deluxe-twin-2/IMG_7354 1.png",
  "/lodge/rooms/deluxe-twin-2/IMG_7355 1.png",
  "/lodge/rooms/deluxe-twin-2/IMG_7356 1.png",
  "/lodge/rooms/deluxe-twin-2/IMG_7357 1.png",
];

const traditionalDoubleGallery = [
  "/lodge/rooms/traditional-double-room/IMG_0387 1.png",
  "/lodge/rooms/traditional-double-room/IMG_0388 1.png",
  "/lodge/rooms/traditional-double-room/IMG_0389 1.png",
  "/lodge/rooms/traditional-double-room/IMG_4591 1.png",
  "/lodge/rooms/traditional-double-room/IMG_4592 3.png",
  "/lodge/rooms/traditional-double-room/IMG_4593 1.png",
];

const traditionalTwin1Gallery = [
  "/lodge/rooms/traditional-twin-room-1/IMG_1605 1.png",
  "/lodge/rooms/traditional-twin-room-1/IMG_1606 1.png",
  "/lodge/rooms/traditional-twin-room-1/IMG_1607 1.png",
  "/lodge/rooms/traditional-twin-room-1/IMG_4657 1.png",
  "/lodge/rooms/traditional-twin-room-1/IMG_4663 1.png",
  "/lodge/rooms/traditional-twin-room-1/IMG_4669 1.png",
];

const traditionalTwin2Gallery = [
  "/lodge/rooms/traditional-twin-room-2/IMG_4592 2.png",
  "/lodge/rooms/traditional-twin-room-2/IMG_4640 1.png",
  "/lodge/rooms/traditional-twin-room-2/IMG_4642 2.png",
  "/lodge/rooms/traditional-twin-room-2/IMG_4643 2.png",
  "/lodge/rooms/traditional-twin-room-2/IMG_4644 1.png",
  "/lodge/rooms/traditional-twin-room-2/IMG_4646 2.png",
];

const fanFacilities: FacilityKey[] = [
  "wifi",
  "fan",
  "shower",
  "westernToilet",
  "washBasin",
  "mosquitoNet",
  "towel",
  "toothbrush",
  "soap",
  "parking",
];

const traditionalFacilities: FacilityKey[] = [
  "wifi",
  "fan",
  "shower",
  "waterTub",
  "westernToilet",
  "mosquitoNet",
  "towel",
  "toothbrush",
  "soap",
  "parking",
];

const acFacilities: FacilityKey[] = [
  "wifi",
  "ac",
  "hotShower",
  "westernToilet",
  "washBasin",
  "mosquitoNet",
  "towel",
  "toothbrush",
  "soap",
  "parking",
];

const fanCardSpecs: RoomCardSpec[] = [
  { key: "people", label: "2 Guests" },
  { key: "fan", label: "Fan" },
];

const acCardSpecs: RoomCardSpec[] = [
  { key: "people", label: "2 Guests" },
  { key: "ac", label: "AC" },
  { key: "shower", label: "Hot Water" },
];

export const rooms: Room[] = [
  {
    slug: "standard-twin-1",
    title: "Standard Twin Room 1",
    cardTitle: "Standard Twin 1",
    cardImage: "/lodge/rooms/standard-twin-1.jpg",
    description:
      "Two single beds with a fan and private bathroom. A comfortable and practical choice for friends or trekking partners looking to rest before or after their Waerebo adventure.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for trekking partners", "Twin Bed"),
    facilities: fanFacilities,
    images: numberedGallery("standard-twin-1"),
    reviews: baseReviews,
  },
  {
    slug: "standard-double",
    title: "Standard Double Room 2",
    cardTitle: "Standard Double",
    cardImage: "/lodge/rooms/standard-double.jpg",
    description:
      "A cozy room with a double bed, fan, and private bathroom. Ideal for couples or solo travelers seeking a peaceful stay surrounded by nature.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for couples", "Double Bed"),
    facilities: fanFacilities,
    images: numberedGallery("standard-double"),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "standard-twin-2",
    title: "Standard Twin Room 3",
    cardTitle: "Standard Twin 2",
    cardImage: "/lodge/rooms/standard-twin-2.jpg",
    description:
      "Two single beds with a fan and private bathroom. A comfortable and practical choice for friends or trekking partners looking to rest before or after their Waerebo adventure.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for trekking partners", "Twin Bed"),
    facilities: fanFacilities,
    images: numberedGallery("standard-twin-2"),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-1",
    title: "Traditional Twin Room 4",
    cardTitle: "Wooden Twin 1",
    cardImage: "/lodge/rooms/wooden-twin-1.jpg",
    description:
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Traditional Wooden Room", "Twin Bed"),
    facilities: traditionalFacilities,
    images: numberedGallery("wooden-twin-1"),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-2",
    title: "Traditional Twin Room 5",
    cardTitle: "Wooden Twin 2",
    cardImage: "/lodge/rooms/wooden-twin-2.jpg",
    description:
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Traditional Wooden Room", "Twin Bed"),
    facilities: traditionalFacilities,
    images: traditionalTwin1Gallery,
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-double",
    title: "Traditional Double Room 6",
    cardTitle: "Wooden Double",
    cardImage: "/lodge/rooms/wooden-double.jpg",
    description:
      "A warm wooden room with a double bed, perfect for couples seeking a more authentic and relaxing Flores experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for couples", "Double Bed"),
    facilities: traditionalFacilities,
    images: traditionalDoubleGallery,
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-3",
    title: "Traditional Twin Room 7",
    cardTitle: "Wooden Twin 3",
    cardImage: "/lodge/rooms/wooden-twin-3.jpg",
    description:
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Traditional Wooden Room", "Twin Bed"),
    facilities: traditionalFacilities,
    images: traditionalTwin2Gallery,
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "deluxe-double-1",
    title: "Deluxe Double Room 8",
    cardTitle: "Deluxe Double 1",
    cardImage: "/lodge/rooms/deluxe-double-1.jpg",
    description:
      "A spacious air-conditioned room featuring a double bed and private hot shower. Perfect for guests who appreciate extra comfort after a long journey through Flores.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for couples",
      "Double Bed",
      "Private Bathroom with Hot Shower"
    ),
    facilities: acFacilities,
    images: deluxeDouble1Gallery,
    reviews: baseReviews,
  },
  {
    slug: "deluxe-twin-1",
    title: "Deluxe Twin Room 9",
    cardTitle: "Deluxe Twin 1",
    cardImage: "/lodge/rooms/deluxe-twin-1.jpg",
    description:
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for friends and trekking companions looking to recharge before their next adventure.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for trekking partners",
      "Twin Bed",
      "Private Hot Shower"
    ),
    facilities: acFacilities,
    images: deluxeTwin1Gallery,
    reviews: baseReviews,
  },
  {
    slug: "deluxe-double-2",
    title: "Deluxe Double Room 10",
    cardTitle: "Deluxe Double 2",
    cardImage: "/lodge/rooms/deluxe-double-2.jpg",
    description:
      "A spacious air-conditioned room featuring a double bed and private hot shower. Perfect for guests who appreciate extra comfort after a long journey through Flores.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for couples",
      "Double Bed",
      "Private Bathroom with Hot Shower"
    ),
    facilities: acFacilities,
    images: deluxeDouble2Gallery,
    reviews: baseReviews,
  },
  {
    slug: "deluxe-twin-2",
    title: "Deluxe Twin Room 11",
    cardTitle: "Deluxe Twin 2",
    cardImage: "/lodge/rooms/deluxe-twin-2.jpg",
    description:
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for friends and trekking companions looking to recharge before their next adventure.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for trekking partners",
      "Twin Bed",
      "Private Hot Shower"
    ),
    facilities: acFacilities,
    images: deluxeTwin2Gallery,
    reviews: baseReviews,
  },
];

export function getRoom(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}
