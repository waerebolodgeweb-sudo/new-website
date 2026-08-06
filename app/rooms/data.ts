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
    name: "al Garnier",
    location: "Date",
    rating: 5,
    text: "Wonderful place with an amazing view. Rooms are very simple, but perfectly clean with airco. The plus is the food and the atmosphere / kindness of this family-owned place.",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-01-al-Garnier.webp",
  },
  {
    name: "Julia Kyryluck",
    location: "Date",
    rating: 5,
    text: "A unique combination of mountains, rice fields and sea in 1 place! Plus, Martin, the owner, is a great storyteller! Highly recommended to visit :)",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-02-Julia-Kyryluck.webp",
  },
  {
    name: "Flores Marvelous",
    location: "Date",
    rating: 5,
    text: "One Of The Best Place To Staying For Countryside Trip. Not that hard to find the place, the view is great and the rooms are great.",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-03-Flores-Marvelous.webp",
  },
  {
    name: "Felina Margiati",
    location: "Date",
    rating: 5,
    text: "Nice place, it's in the middle of a rice field but at the same time you can see the sea from here. Clean room, staff and owner are friendly. Electricity is out at 10PM, no mobile network, a perfect getaway.",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-04-Felina-Margiati.webp",
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

const roomGalleryOrder = [9, 7, 1, 2, 8, 6, 5, 3, 4];

const roomGallery = (folderName: string, filePrefix: string) =>
  roomGalleryOrder.map(
    (imageNumber) =>
      `/lodge/rooms/${folderName}/${filePrefix}-${String(imageNumber).padStart(
        2,
        "0"
      )}.webp`
  );

const fanFacilities: FacilityKey[] = [
  "fan",
  "westernToilet",
  "toothbrush",
  "wifi",
  "mosquitoNet",
  "soap",
  "shower",
  "washBasin",
  "amenities",
  "parking",
  "towel",
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
    cardTitle: "Wooden Twin 1",
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
    cardTitle: "Wooden Twin 2",
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
    cardTitle: "Wooden Double",
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
    cardTitle: "Wooden Twin 3",
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
