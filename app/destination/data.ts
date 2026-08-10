/* ── Destination pages data (static) ── */

const D = "/Destination";

export type Localized = { en: string; id: string };

export interface Destination {
  slug: string;
  /** File name stem used across hero + photo assets */
  stem: string;
  heroTitle: Localized;
  name: Localized;
  address: Localized;
  heading: Localized;
  body1: Localized;
  body2: Localized;
  mapUrl: string;
}

export const destinations: Destination[] = [
  {
    slug: "waerebo-village",
    stem: "Mbaru-Niang-House",
    heroTitle: {
      en: "The Village Above the Clouds",
      id: "Desa di Atas Awan",
    },
    name: { en: "Waerebo Traditional Village", id: "Desa Adat Waerebo" },
    address: {
      en: "Satar Lenda, Satar Mese Barat, Manggarai Regency.",
      id: "Satar Lenda, Satar Mese Barat, Kabupaten Manggarai.",
    },
    heading: { en: "Discover The Village", id: "Temukan Desa Ini" },
    body1: {
      en: "Located deep in the mountains of Manggarai, Waerebo is a traditional village that has preserved its ancient way of life for generations. Reached only by a scenic trek through the dense forest, arriving here feels like stepping back in time.",
      id: "Terletak jauh di pegunungan Manggarai, Waerebo adalah desa adat yang menjaga cara hidup leluhurnya lintas generasi. Hanya bisa dicapai lewat trek indah menembus hutan lebat — tiba di sini terasa seperti kembali ke masa lalu.",
    },
    body2: {
      en: "Experience the architecture of the Mbaru Niang, the iconic cone-shaped houses, and connect with the welcoming local community who still practice the customs and traditions of their ancestors.",
      id: "Rasakan arsitektur Mbaru Niang, rumah kerucut yang ikonik, dan berbaurlah dengan masyarakat lokal yang ramah dan masih menjalankan adat serta tradisi leluhur mereka.",
    },
    mapUrl: "https://maps.google.com/?q=Waerebo+Village+Manggarai",
  },
  {
    slug: "nusa-molas",
    stem: "Nusa-Molas",
    heroTitle: {
      en: "A Hidden Island Paradise",
      id: "Surga Pulau Tersembunyi",
    },
    name: { en: "Mules Island", id: "Pulau Mules" },
    address: {
      en: "South Coast of Manggarai, East Nusa Tenggara.",
      id: "Pesisir Selatan Manggarai, Nusa Tenggara Timur.",
    },
    heading: { en: "Escape to Nusa Molas", id: "Kabur ke Nusa Molas" },
    body1: {
      en: "Just a short boat ride from the southern coast of Flores lies Nusa Molas, a pristine island getaway untouched by mass tourism. With its crystal-clear turquoise waters and soft white sands, it's the perfect place to unwind and recharge.",
      id: "Hanya sebentar naik perahu dari pesisir selatan Flores terdapat Nusa Molas, pulau asri yang belum tersentuh wisata massal. Dengan air biru toska sebening kristal dan pasir putih lembut, inilah tempat sempurna untuk bersantai dan memulihkan energi.",
    },
    body2: {
      en: "Whether you want to snorkel among vibrant coral reefs, observe the local wildlife, or simply relax on a quiet beach, this secluded paradise offers a tranquil escape after your mountain adventures.",
      id: "Mau snorkeling di antara terumbu karang, mengamati satwa lokal, atau sekadar bersantai di pantai sepi — surga terpencil ini menawarkan pelarian tenang setelah petualangan gunung Anda.",
    },
    mapUrl: "https://maps.google.com/?q=Mules+Island+Manggarai",
  },
  {
    slug: "pleas-waterfall",
    stem: "Cunca-Plias-Waterfall",
    heroTitle: {
      en: "A Refreshing Jungle Oasis",
      id: "Oasis Hutan yang Menyegarkan",
    },
    name: { en: "Pleas Waterfall Oasis", id: "Oasis Air Terjun Pleas" },
    address: {
      en: "A jungle cascade located in the heart of Flores.",
      id: "Air terjun di tengah hutan Flores.",
    },
    heading: {
      en: "Hidden Pleas Waterfall",
      id: "Air Terjun Pleas Tersembunyi",
    },
    body1: {
      en: "Hidden away within the lush, verdant jungles of Flores, Pleas Waterfall is a breathtaking natural wonder. The cool, cascading waters flow down into a crystal-clear natural pool, creating a serene environment that feels miles away from civilization.",
      id: "Tersembunyi di dalam hutan Flores yang hijau subur, Air Terjun Pleas adalah keajaiban alam yang memukau. Airnya yang sejuk mengalir ke kolam alami sebening kristal, menciptakan suasana damai yang terasa jauh dari keramaian.",
    },
    body2: {
      en: "It is the ultimate spot to cool off and relax after a long day of trekking. Listen to the soothing sounds of nature, take a refreshing dip, and capture the raw beauty of this hidden gem.",
      id: "Tempat terbaik untuk mendinginkan diri setelah seharian trekking. Dengarkan suara alam yang menenangkan, berenang sejenak, dan abadikan keindahan alami permata tersembunyi ini.",
    },
    mapUrl: "https://maps.google.com/?q=Cunca+Plias+Waterfall+Flores",
  },
  {
    slug: "lingko-spider-web",
    stem: "Linko-Spider-Web-Rice-fields",
    heroTitle: {
      en: "The Iconic Spider Web Rice Fields",
      id: "Sawah Jaring Laba-laba yang Ikonik",
    },
    name: {
      en: "Lingko Spider Web Rice Fields",
      id: "Sawah Jaring Laba-laba Lingko",
    },
    address: {
      en: "Cancar, Ruteng, Manggarai Regency.",
      id: "Cancar, Ruteng, Kabupaten Manggarai.",
    },
    heading: { en: "The Spider Web Fields", id: "Sawah Jaring Laba-laba" },
    body1: {
      en: "Flores is home to one of the most unique agricultural landscapes in the world — the Lingko spider web rice fields. More than just beautiful, it represents an ancient Manggarai system of land division where plots radiate outward from a central point.",
      id: "Flores memiliki salah satu lanskap pertanian paling unik di dunia — sawah Lingko berbentuk jaring laba-laba. Lebih dari sekadar indah, ia mewakili sistem pembagian lahan Manggarai kuno di mana petak-petak memancar dari satu titik pusat.",
    },
    body2: {
      en: "Standing at the viewpoint, you can see the lush green patterns that stretch across the valley, offering a perfect glimpse into the island's deep-rooted farming traditions and communal culture.",
      id: "Dari titik pandang, Anda bisa melihat pola hijau subur yang membentang di lembah — jendela sempurna menuju tradisi bertani dan budaya komunal pulau ini yang mengakar dalam.",
    },
    mapUrl: "https://maps.google.com/?q=Lingko+Spider+Web+Rice+Fields+Cancar",
  },
  {
    slug: "liang-bua",
    stem: "Liang-Bua-Hobbit-Cave",
    heroTitle: {
      en: "Step Inside the Home of the Hobbit",
      id: "Masuki Rumah Sang Hobbit",
    },
    name: {
      en: "Liang Bua Archaeological Cave",
      id: "Gua Arkeologi Liang Bua",
    },
    address: {
      en: "Rampasasa, Ruteng, Manggarai Regency.",
      id: "Rampasasa, Ruteng, Kabupaten Manggarai.",
    },
    heading: { en: "Inside Liang Bua Cave", id: "Di Dalam Gua Liang Bua" },
    body1: {
      en: 'Travel back in time at Liang Bua, the world-renowned archaeological cave where the remains of Homo floresiensis — affectionately known as the "Flores Hobbit" — were discovered. This massive limestone cavern holds the secrets of an ancient human species that once roamed this island.',
      id: 'Kembali ke masa lalu di Liang Bua, gua arkeologi terkenal dunia tempat ditemukannya Homo floresiensis — yang akrab disebut "Hobbit Flores". Gua batu kapur raksasa ini menyimpan rahasia spesies manusia purba yang pernah menjelajahi pulau ini.',
    },
    body2: {
      en: "Exploring the cave offers a thrilling sense of discovery. Learn about the groundbreaking excavations and imagine what life was like thousands of years ago in this awe-inspiring prehistoric dwelling.",
      id: "Menjelajahi gua ini memberi sensasi penemuan yang mendebarkan. Pelajari ekskavasi bersejarahnya dan bayangkan kehidupan ribuan tahun lalu di hunian prasejarah yang menakjubkan ini.",
    },
    mapUrl: "https://maps.google.com/?q=Liang+Bua+Cave+Ruteng",
  },
  {
    slug: "padar-island",
    stem: "Padar-Island",
    heroTitle: {
      en: "Majestic Peaks and Tri-Colored Bays",
      id: "Puncak Megah dan Teluk Tiga Warna",
    },
    name: { en: "Padar Island Viewpoint", id: "Titik Pandang Pulau Padar" },
    address: {
      en: "Komodo National Park, West Manggarai.",
      id: "Taman Nasional Komodo, Manggarai Barat.",
    },
    heading: { en: "Padar Island Views", id: "Panorama Pulau Padar" },
    body1: {
      en: "Padar Island is renowned for its dramatic, rugged landscape and stunning viewpoints. A hike to the island's summit rewards you with one of the most iconic panoramas in Indonesia, featuring sweeping views of three distinct bays with unique sand colors: white, black, and pink.",
      id: "Pulau Padar terkenal dengan lanskap dramatisnya yang berbukit dan titik pandang memukau. Pendakian ke puncaknya dihadiahi salah satu panorama paling ikonik di Indonesia — pemandangan tiga teluk dengan warna pasir berbeda: putih, hitam, dan merah muda.",
    },
    body2: {
      en: "Located within the Komodo National Park, this island is a photographer's absolute dream. The challenging but rewarding trek up the savannah-covered hills is an unforgettable highlight of any trip to Flores.",
      id: "Berada di dalam Taman Nasional Komodo, pulau ini adalah impian para fotografer. Trek menantang namun memuaskan menyusuri bukit sabana menjadi sorotan tak terlupakan dari setiap perjalanan ke Flores.",
    },
    mapUrl: "https://maps.google.com/?q=Padar+Island+Komodo",
  },
];

export const destinationAssets = (stem: string) => ({
  heroDesktop: `${D}/Waerebo-Lodge-Destination-Hero-Desktop-${stem}.webp`,
  heroMobile: `${D}/Waerebo-Lodge-Destination-Hero-Mobile-${stem}.webp`,
  photos: [1, 2, 3].map(
    (n) => `${D}/Waerebo-Lodge-Destination-${stem}-0${n}.webp`
  ),
});

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
