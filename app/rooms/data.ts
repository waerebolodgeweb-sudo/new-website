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

const roomThumbnail = (fileName: string) => `/lodge/rooms/${fileName}`;

const roomGallery = (folderName: string, filePrefix: string) =>
  Array.from(
    { length: 9 },
    (_, index) =>
      `/lodge/rooms/${folderName}/${filePrefix}-${String(index + 1).padStart(
        2,
        "0"
      )}.webp`
  );

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
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Standard-Twin-1-01.webp"),
    description:
      "Two single beds with a fan and private bathroom. A comfortable and practical choice for friends or trekking partners looking to rest before or after their Waerebo adventure.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for trekking partners", "Twin Bed"),
    facilities: fanFacilities,
    images: roomGallery(
      "1-Standard Twin 1",
      "Waerebo-Lodge-Room-Standard-Twin-1"
    ),
    reviews: baseReviews,
  },
  {
    slug: "standard-double",
    title: "Standard Double Room 2",
    cardTitle: "Standard Double",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Standard-Double-01.webp"),
    description:
      "A cozy room with a double bed, fan, and private bathroom. Ideal for couples or solo travelers seeking a peaceful stay surrounded by nature.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for couples", "Double Bed"),
    facilities: fanFacilities,
    images: roomGallery(
      "2-Standard Double",
      "Waerebo-Lodge-Room-Standard-Double"
    ),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "standard-twin-2",
    title: "Standard Twin Room 3",
    cardTitle: "Standard Twin 2",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Standard-Twin-2-01.webp"),
    description:
      "Two single beds with a fan and private bathroom. A comfortable and practical choice for friends or trekking partners looking to rest before or after their Waerebo adventure.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for trekking partners", "Twin Bed"),
    facilities: fanFacilities,
    images: roomGallery(
      "3-Standard Twin 2",
      "Waerebo-Lodge-Room-Standard-Twin-2"
    ),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-1",
    title: "Traditional Twin Room 4",
    cardTitle: "Traditional Twin 1",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Traditional-Twin-1-01.webp"),
    description:
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Traditional Wooden Room", "Twin Bed"),
    facilities: traditionalFacilities,
    images: roomGallery(
      "4-Traditional Twin Room 1",
      "Waerebo-Lodge-Room-Traditional-Twin-1"
    ),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-2",
    title: "Traditional Twin Room 5",
    cardTitle: "Traditional Twin 2",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Traditional-Twin-2-01.webp"),
    description:
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Traditional Wooden Room", "Twin Bed"),
    facilities: traditionalFacilities,
    images: roomGallery(
      "5-Traditional Twin Room 2",
      "Waerebo-Lodge-Room-Traditional-Twin-2"
    ),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-double",
    title: "Traditional Double Room 6",
    cardTitle: "Traditional Double",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Traditional-Double-01.webp"),
    description:
      "A warm wooden room with a double bed, perfect for couples seeking a more authentic and relaxing Flores experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Perfect for couples", "Double Bed"),
    facilities: traditionalFacilities,
    images: roomGallery(
      "6-Traditional Double Room",
      "Waerebo-Lodge-Room-Traditional-Double"
    ),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "wooden-twin-3",
    title: "Traditional Twin Room 7",
    cardTitle: "Traditional Twin 3",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Traditional-Twin-3-01.webp"),
    description:
      "Stay in a charming wooden room that reflects the traditional character of rural Flores. Equipped with twin beds and a private bathroom, offering an authentic lodge experience.",
    cardSpecs: fanCardSpecs,
    highlights: roomHighlights("Traditional Wooden Room", "Twin Bed"),
    facilities: traditionalFacilities,
    images: roomGallery(
      "7-Traditional Twin Room 3",
      "Waerebo-Lodge-Room-Traditional-Twin-3"
    ),
    reviews: baseReviews.slice(0, 3),
  },
  {
    slug: "deluxe-double-1",
    title: "Deluxe Double Room 8",
    cardTitle: "Deluxe Double 1",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Deluxe-Double-1-01.webp"),
    description:
      "A spacious air-conditioned room featuring a double bed and private hot shower. Perfect for guests who appreciate extra comfort after a long journey through Flores.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for couples",
      "Double Bed",
      "Private Bathroom with Hot Shower"
    ),
    facilities: acFacilities,
    images: roomGallery(
      "8-Deluxe Double 1",
      "Waerebo-Lodge-Room-Deluxe-Double-1"
    ),
    reviews: baseReviews,
  },
  {
    slug: "deluxe-twin-1",
    title: "Deluxe Twin Room 9",
    cardTitle: "Deluxe Twin 1",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Deluxe-Twin-1-01.webp"),
    description:
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for friends and trekking companions looking to recharge before their next adventure.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for trekking partners",
      "Twin Bed",
      "Private Hot Shower"
    ),
    facilities: acFacilities,
    images: roomGallery("9-Deluxe Twin 1", "Waerebo-Lodge-Room-Deluxe-Twin-1"),
    reviews: baseReviews,
  },
  {
    slug: "deluxe-double-2",
    title: "Deluxe Double Room 10",
    cardTitle: "Deluxe Double 2",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Deluxe-Double-2-01.webp"),
    description:
      "A spacious air-conditioned room featuring a double bed and private hot shower. Perfect for guests who appreciate extra comfort after a long journey through Flores.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for couples",
      "Double Bed",
      "Private Bathroom with Hot Shower"
    ),
    facilities: acFacilities,
    images: roomGallery(
      "10-Deluxe Double 2",
      "Waerebo-Lodge-Room-Deluxe-Double-2"
    ),
    reviews: baseReviews,
  },
  {
    slug: "deluxe-twin-2",
    title: "Deluxe Twin Room 11",
    cardTitle: "Deluxe Twin 2",
    cardImage: roomThumbnail("Waerebo-Lodge-Room-Deluxe-Twin-2-01.webp"),
    description:
      "Two single beds with air conditioning and a private hot shower. A comfortable choice for friends and trekking companions looking to recharge before their next adventure.",
    cardSpecs: acCardSpecs,
    highlights: roomHighlights(
      "Perfect for trekking partners",
      "Twin Bed",
      "Private Hot Shower"
    ),
    facilities: acFacilities,
    images: roomGallery("11-Deluxe Twin 2", "Waerebo-Lodge-Room-Deluxe-Twin-2"),
    reviews: baseReviews,
  },
];

export function getRoom(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}
