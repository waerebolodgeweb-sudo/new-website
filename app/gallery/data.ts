/* ── Gallery page data (static) ── */

const G = "/Gallery";

export type Localized = { en: string; id: string };

export interface IconicDestination {
  image: string;
  title: string;
  caption: Localized;
}

/** Hero photo cluster — top of the page */
export const heroPhotos: string[] = [
  `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-01.webp`,
  `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-02.webp`,
  `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-03.webp`,
  `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-04.webp`,
  `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-05.webp`,
  `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-06.webp`,
  `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-07.webp`,
];

/** "Discover the Beauty of Flores" iconic destination carousel */
export const iconicDestinations: IconicDestination[] = [
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-01`,
    title: "Waerebo Village",
    caption: {
      en: "Sleep beneath the stars in a UNESCO-listed “village above the clouds” and share our authentic coffee before your ascent to Mbaru Niang.",
      id: "Bermalam di bawah bintang di “desa di atas awan” warisan UNESCO dan nikmati kopi asli kami sebelum pendakian ke Mbaru Niang.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-02`,
    title: "Nusa Molas",
    caption: {
      en: "A quiet islet framed by turquoise water — the calm before the highlands.",
      id: "Pulau kecil tenang dengan air biru toska — ketenangan sebelum pendakian.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-03`,
    title: "Pleas Waterfall",
    caption: {
      en: "A hidden cascade tucked deep in the Flores jungle.",
      id: "Air terjun tersembunyi jauh di dalam hutan Flores.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-04`,
    title: "Lembor Rice Fields",
    caption: {
      en: "Endless emerald paddies stretching across the valley floor.",
      id: "Hamparan sawah hijau membentang di sepanjang lembah.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-05`,
    title: "Liang Bua (Hobbit Cave)",
    caption: {
      en: "The famous cave where the “Hobbit” Homo floresiensis was found.",
      id: "Gua terkenal tempat ditemukannya “Hobbit” Homo floresiensis.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-06`,
    title: "Padar Island",
    caption: {
      en: "Iconic ridgeline views over the bays of the Komodo archipelago.",
      id: "Pemandangan punggung bukit ikonik di atas teluk kepulauan Komodo.",
    },
  },
];

/** Usable guest photos (blank exports filtered out) */
export const guestPhotos: string[] = [
  "01",
  "03",
  "05",
  "06",
  "07",
  "08",
  "10",
  "12",
  "13",
  "14",
  "16",
  "17",
  "19",
  "20",
  "21",
  "23",
].map((n) => `${G}/Waerebo-Lodge-Gallery-Guest-Photo-${n}.webp`);

/** Beige caption tiles interspersed in the bento grid */
export const captionTiles: Localized[] = [
  {
    en: "Experience true Flores hospitality. Our lodge is a welcoming sanctuary where travelers unwind, share stories, meals, and unforgettable moments.",
    id: "Rasakan keramahan Flores sejati. Lodge kami adalah tempat singgah yang hangat untuk beristirahat, berbagi cerita, makan, dan momen tak terlupakan.",
  },
  {
    en: "Surrounded by majestic mountains and lush rice paddies, every stop is framed by breathtaking scenery. Pure adventure awaits.",
    id: "Dikelilingi pegunungan megah dan sawah subur, setiap perhentian dibingkai pemandangan menakjubkan. Petualangan sejati menanti.",
  },
  {
    en: "Discover rich Manggarai heritage. From traditional architecture to local customs, culture lives deeply within every corner of Flores.",
    id: "Temukan kekayaan warisan Manggarai. Dari arsitektur tradisional hingga adat lokal, budaya hidup dalam setiap sudut Flores.",
  },
  {
    en: "Dive into the ultimate adventure. Our tours weave together trekking, culture, and comfort into one seamless journey.",
    id: "Selami petualangan terbaik. Tur kami memadukan trekking, budaya, dan kenyamanan dalam satu perjalanan utuh.",
  },
];

/** Two full-bleed feature images with overlay captions */
export const featureMbaruNiang = {
  desktop: `${G}/Waerebo-Lodge-Gallery-Mbaru-Niang-House-Desktop.webp`,
  mobile: `${G}/Waerebo-Lodge-Gallery-Mbaru-Niang-House-Mobile.webp`,
  caption: {
    en: "A perfect photo for guests against the misty backdrop of the iconic Mbaru Niang.",
    id: "Foto sempurna bagi tamu dengan latar berkabut Mbaru Niang yang ikonik.",
  } as Localized,
};

export const featureIkat = {
  desktop: `${G}/Waerebo-Lodge-Gallery-Ikat-Weaving-Desktop.webp`,
  mobile: `${G}/Waerebo-Lodge-Gallery-Ikat-Weaving-Mobile.webp`,
  caption: {
    en: "Witnessing the intricate, generational art of Manggarai ikat weaving right beneath a traditional house.",
    id: "Menyaksikan seni tenun ikat Manggarai yang rumit dan turun-temurun tepat di bawah rumah adat.",
  } as Localized,
};

export const galleryHeader = {
  title: {
    en: "Captured Moments in Flores",
    id: "Momen Terekam di Flores",
  } as Localized,
  subtitle: {
    en: "Explore the culture, nature, and unforgettable experiences that await you.",
    id: "Jelajahi budaya, alam, dan pengalaman tak terlupakan yang menanti Anda.",
  } as Localized,
};

export const iconicHeader = {
  eyebrow: { en: "Iconic Destinations", id: "Destinasi Ikonik" } as Localized,
  head1: { en: "Discover the ", id: "Temukan " } as Localized,
  head2: { en: "Beauty of Flores", id: "Keindahan Flores" } as Localized,
};
