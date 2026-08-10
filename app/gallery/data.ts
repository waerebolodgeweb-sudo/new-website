/* ── Gallery page data (static) ── */

import type { NewIconName } from "@/components/icons/new-icons";

const G = "/Gallery";

export type Localized = { en: string; id: string };

export interface GuestPhoto {
  image: string;
  title: Localized;
  caption: Localized;
}

export type CaptionTileId = "a1" | "a2" | "a3" | "b1" | "b2" | "c1" | "c2";

interface CaptionSegment {
  text: string;
  strong?: boolean;
}

interface CaptionTile {
  image: string;
  caption: Record<keyof Localized, CaptionSegment[]>;
}

export interface IconicDestination {
  icon: NewIconName;
  image: string;
  title: Localized;
  caption: Localized;
  slug: string;
}

/** Hero photo strip — all 12 carousel pictures */
export const heroPhotos: string[] = Array.from(
  { length: 12 },
  (_, i) =>
    `${G}/Gallery-Waerebo-Lodge-Hero-Carousel-Picture-${String(i + 1).padStart(2, "0")}.webp`
);

/** "Discover the Beauty of Flores" iconic destination carousel */
export const iconicDestinations: IconicDestination[] = [
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-01`,
    slug: "waerebo-village",
    title: { en: "Waerebo Village", id: "Desa Waerebo" },
    icon: "village",
    caption: {
      en: 'Discover the magic of the "Village Above the Clouds" and immerse yourself in the ancient heritage of the Mbaru Niang.',
      id: 'Temukan pesona "Desa di Atas Awan" dan selami warisan leluhur Mbaru Niang.',
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-02`,
    slug: "nusa-molas",
    title: { en: "Nusa Molas", id: "Nusa Molas" },
    icon: "sea-2",
    caption: {
      en: "Escape to this pristine island just off the coast. Enjoy crystal-clear waters, white sands, and incredible, quiet snorkeling.",
      id: "Nikmati ketenangan pulau alami yang terletak tak jauh dari pesisir ini. Berenang di air sebening kristal, bersantai di pasir putih, dan snorkeling dalam suasana yang tenang.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-03`,
    slug: "pleas-waterfall",
    title: { en: "Pleas Waterfall", id: "Air Terjun Pleas" },
    icon: "waterfalls",
    caption: {
      en: "Refresh yourself in the cool, cascading waters of this hidden jungle oasis. The perfect spot to relax after a long trek.",
      id: "Segarkan diri di aliran air sejuk oasis tersembunyi di tengah hutan ini. Tempat yang sempurna untuk bersantai setelah trekking panjang.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-04`,
    slug: "lingko-spider-web",
    title: { en: "Rice Fields", id: "Persawahan" },
    icon: "rice",
    caption: {
      en: "Explore the iconic spider-web rice fields (Lingko) that showcase the unique agricultural traditions and stunning landscapes of Flores.",
      id: "Jelajahi sawah jaring laba-laba (Lingko) yang ikonik, cerminan tradisi pertanian unik dan lanskap Flores yang memukau.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-05`,
    slug: "liang-bua",
    title: { en: "Hobbit Cave", id: "Gua Hobbit" },
    icon: "cave",
    caption: {
      en: "Step back in time at Liang Bua, the world-famous archaeological cave where the ancient Homo floresiensis was discovered.",
      id: "Melangkahlah kembali ke masa lalu di Liang Bua, gua arkeologi terkenal di dunia tempat ditemukannya manusia purba Homo floresiensis.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Iconic-Destination-06`,
    slug: "padar-island",
    title: { en: "Padar Island", id: "Pulau Padar" },
    icon: "mountain",
    caption: {
      en: "Trek to the summit of this iconic island and be rewarded with breathtaking, panoramic views of its dramatic hills and uniquely colored bays.",
      id: "Mendakilah ke puncak pulau ikonik ini dan nikmati panorama menakjubkan berupa perbukitan dramatis serta teluk-teluk dengan warna yang unik.",
    },
  },
];

/** Usable guest photos (blank exports filtered out) */
export const guestPhotos: GuestPhoto[] = [
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-01.webp`,
    title: { en: "Coastal Boat Ride", id: "Perjalanan Perahu Pesisir" },
    caption: {
      en: "Enjoying a scenic and relaxing journey along the beautiful Flores coast.",
      id: "Menikmati perjalanan santai dengan pemandangan indah di sepanjang pesisir Flores.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-03.webp`,
    title: { en: "Jungle Trekking", id: "Trekking Hutan" },
    caption: {
      en: "Navigating the lush, green trails on the exciting hike toward the village.",
      id: "Menyusuri jalur hijau yang rimbun dalam pendakian seru menuju desa.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-05.webp`,
    title: { en: "Beachside Break", id: "Rehat di Tepi Pantai" },
    caption: {
      en: "Cooling down with coconuts after a sunny island adventure.",
      id: "Menyejukkan diri dengan air kelapa setelah bertualang di pulau yang cerah.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-06.webp`,
    title: { en: "Kelimutu Sunrise Tour", id: "Tur Matahari Terbit Kelimutu" },
    caption: {
      en: "Witnessing a breathtaking dawn over the iconic tri-colored crater lakes.",
      id: "Menyaksikan fajar menakjubkan di atas danau kawah tiga warna yang ikonik.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-07.webp`,
    title: { en: "Waerebo Arrival", id: "Tiba di Waerebo" },
    caption: {
      en: "Standing before the majestic, traditional Mbaru Niang houses.",
      id: "Berdiri di hadapan rumah adat Mbaru Niang yang megah.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-08.webp`,
    title: { en: "Lodge Dining", id: "Bersantap di Lodge" },
    caption: {
      en: "Sharing stories and delicious home-cooked meals.",
      id: "Berbagi cerita dan menikmati hidangan rumahan yang lezat.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-10.webp`,
    title: { en: "Cultural Exchange", id: "Pertukaran Budaya" },
    caption: {
      en: "Connecting with the locals and embracing Flores traditions.",
      id: "Berinteraksi dengan masyarakat lokal dan menghayati tradisi Flores.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-12.webp`,
    title: { en: "Local Culinary Experience", id: "Pengalaman Kuliner Lokal" },
    caption: {
      en: "Savoring authentic and traditional flavors of Flores.",
      id: "Menikmati cita rasa Flores yang autentik dan tradisional.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-13.webp`,
    title: { en: "Padar Island Viewpoint", id: "Puncak Pandang Pulau Padar" },
    caption: {
      en: "Taking in the spectacular, panoramic coastal views of Padar Island.",
      id: "Menikmati panorama pesisir Pulau Padar yang spektakuler.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-14.webp`,
    title: { en: "Island Hopping", id: "Jelajah Pulau" },
    caption: {
      en: "Capturing unforgettable family moments high above the pristine bays.",
      id: "Mengabadikan momen keluarga yang tak terlupakan di atas teluk-teluk alami.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-16.webp`,
    title: { en: "Guided Village Walk", id: "Jelajah Desa Bersama Pemandu" },
    caption: {
      en: "Exploring the peaceful, scenic surroundings of Waerebo lodge.",
      id: "Menjelajahi lingkungan Waerebo Lodge yang damai dan indah.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-17.webp`,
    title: { en: "Mount Kelimutu", id: "Gunung Kelimutu" },
    caption: {
      en: "Experiencing the unforgettable morning above the clouds.",
      id: "Menikmati pagi yang tak terlupakan di atas awan.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-19.webp`,
    title: { en: "Waerebo Village", id: "Desa Waerebo" },
    caption: {
      en: "Making shared memories at the heart of the village above the clouds.",
      id: "Merangkai kenangan bersama di jantung desa di atas awan.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-20.webp`,
    title: { en: "Heritage Tour", id: "Tur Warisan Budaya" },
    caption: {
      en: "Arriving at the village to discover generations of preserved history.",
      id: "Tiba di desa untuk menemukan sejarah yang terjaga lintas generasi.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-21.webp`,
    title: { en: "Airport Arrival", id: "Tiba di Bandara" },
    caption: {
      en: "A warm, seamless welcome as your incredible Flores adventure begins.",
      id: "Sambutan hangat dan lancar saat petualangan luar biasa Anda di Flores dimulai.",
    },
  },
  {
    image: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-23.webp`,
    title: { en: "Cultural Heritage", id: "Warisan Budaya" },
    caption: {
      en: "Admiring the intricate, beautiful art of traditional Flores Ikat weaving.",
      id: "Mengagumi keindahan seni tenun Ikat Flores tradisional yang rumit.",
    },
  },
];

/** Image-backed caption tiles interspersed in the bento grid */
export const captionTiles: Record<CaptionTileId, CaptionTile> = {
  a1: {
    image: `${G}/bg-bentoa-1.webp`,
    caption: {
      en: [
        { text: "Experience true Flores hospitality. ", strong: true },
        {
          text: "Our lodge is a welcoming sanctuary where travelers and locals share stories, meals, and unforgettable moments.",
        },
      ],
      id: [
        { text: "Rasakan keramahan Flores sejati. ", strong: true },
        {
          text: "Lodge kami adalah tempat singgah yang hangat, tempat wisatawan dan masyarakat lokal berbagi cerita, hidangan, dan momen tak terlupakan.",
        },
      ],
    },
  },
  a2: {
    image: `${G}/bg-bentoa-2.webp`,
    caption: {
      en: [
        { text: "Surrounded by majestic mountains and lush rice paddies, " },
        {
          text: "every step is framed by breathtaking scenery. Pure adventure awaits.",
          strong: true,
        },
      ],
      id: [
        { text: "Dikelilingi pegunungan megah dan hamparan sawah hijau, " },
        {
          text: "setiap langkah dihiasi pemandangan menakjubkan. Petualangan sejati menanti.",
          strong: true,
        },
      ],
    },
  },
  a3: {
    image: `${G}/bg-bentoa-3.webp`,
    caption: {
      en: [
        { text: "Dive into rich Manggarai heritage. ", strong: true },
        {
          text: "From traditional architecture to ancient customs, connect deeply with our vibrant local culture.",
        },
      ],
      id: [
        { text: "Selami kekayaan warisan Manggarai. ", strong: true },
        {
          text: "Dari arsitektur tradisional hingga adat istiadat leluhur, jalin hubungan mendalam dengan budaya lokal kami yang hidup.",
        },
      ],
    },
  },
  b1: {
    image: `${G}/bg-bentob-1.webp`,
    caption: {
      en: [
        { text: "Savor the authentic taste of Flores. ", strong: true },
        {
          text: "Enjoy delicious, home-cooked traditional meals made with fresh local ingredients and family recipes.",
        },
      ],
      id: [
        { text: "Nikmati cita rasa autentik Flores. ", strong: true },
        {
          text: "Santap hidangan tradisional rumahan yang lezat, dibuat dari bahan-bahan lokal segar dan resep keluarga.",
        },
      ],
    },
  },
  b2: {
    image: `${G}/bg-bentob-2.webp`,
    caption: {
      en: [
        { text: "Embark on the ultimate adventure. ", strong: true },
        {
          text: "Trek through dense jungles, discover hidden waterfalls, and explore pristine islands off the coast.",
        },
      ],
      id: [
        { text: "Mulailah petualangan terbaik. ", strong: true },
        {
          text: "Jelajahi hutan lebat, temukan air terjun tersembunyi, dan kunjungi pulau-pulau alami di lepas pantai.",
        },
      ],
    },
  },
  c1: {
    image: `${G}/bg-bentoc-1.webp`,
    caption: {
      en: [
        { text: "Our passionate " },
        { text: "local guides provide authentic insights", strong: true },
        {
          text: " into the rich history, stunning nature, and vibrant daily life of Waerebo.",
        },
      ],
      id: [
        { text: "Pemandu lokal kami yang berdedikasi " },
        { text: "membagikan wawasan autentik", strong: true },
        {
          text: " tentang kekayaan sejarah, alam yang menakjubkan, dan kehidupan sehari-hari Waerebo yang semarak.",
        },
      ],
    },
  },
  c2: {
    image: `${G}/bg-bentoc-2.webp`,
    caption: {
      en: [
        { text: "Disconnect to reconnect. ", strong: true },
        {
          text: "Leave the city hustle behind and embrace the peaceful, slow-paced rhythm of life in the mountains.",
        },
      ],
      id: [
        { text: "Putuskan koneksi untuk kembali terhubung. ", strong: true },
        {
          text: "Tinggalkan hiruk pikuk kota dan nikmati ritme kehidupan pegunungan yang damai dan berjalan perlahan.",
        },
      ],
    },
  },
};

/** Two full-bleed feature images with overlay captions */
export const featureMbaruNiang = {
  desktop: `${G}/Waerebo-Lodge-Gallery-Mbaru-Niang-House-Desktop.webp`,
  mobile: `${G}/Waerebo-Lodge-Gallery-Mbaru-Niang-House-Mobile.webp`,
  label: {
    en: "Mbaru Niang Houses",
    id: "Rumah Mbaru Niang",
  } as Localized,
  caption: {
    en: "A perfect photo for guests against the misty backdrop of the iconic Mbaru Niang.",
    id: "Foto sempurna bagi tamu dengan latar berkabut Mbaru Niang yang ikonik.",
  } as Localized,
};

export const featureIkat = {
  desktop: `${G}/Waerebo-Lodge-Gallery-Ikat-Weaving-Desktop.webp`,
  mobile: `${G}/Waerebo-Lodge-Gallery-Ikat-Weaving-Mobile.webp`,
  label: {
    en: "Traditional Weaving",
    id: "Tenun Tradisional",
  } as Localized,
  caption: {
    en: "Witnessing the intricate, generation-old art of Manggarai Ikat weaving right beneath a traditional house.",
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
