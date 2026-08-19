/* ── Photo attribution registry ──
 *
 * Legal notice source of truth. Every third-party image used on the site is
 * credited here by file name, with a link back to the original owner where one
 * is available. Rendered publicly at /credits and referenced from the footer
 * and the Terms & Conditions page.
 */

export type Localized = { en: string; id: string };

export interface CreditEntry {
  /** Owner / photographer / publication, as supplied by the rights holder */
  owner: string;
  /** Canonical link to the owner, when one exists */
  href?: string;
  /** File names this credit covers */
  files: string[];
}

export interface CreditGroup {
  id: string;
  title: Localized;
  entries: CreditEntry[];
}

/* Credited files live in per-package folders under /public/Trip Package.
 * Map a bare file name to its public URL so the credits page can show
 * a thumbnail next to each attribution. */
const TRIP_ROOT = "/Trip Package";

export function creditImageSrc(file: string): string {
  const folder = file.includes("-Hero-")
    ? "Hero webp"
    : file.includes("-4D-3N-Island-Escape-")
      ? "4D-3N-Trip-Island Escape-webp"
      : file.includes("-4D-3N-Flores-")
        ? "1D-0N-Trip-Flores-webp"
        : file.includes("-3D-2N-")
          ? "3D-2N-Trip-webp"
          : file.includes("-2D-1N-")
            ? "2D-1N-Trip-webp"
            : "1D-0N-Trip-webp";

  return `${TRIP_ROOT}/${folder}/${file}`;
}

export const creditGroups: CreditGroup[] = [
  {
    id: "trip-hero",
    title: {
      en: "Trip Package — Hero Images",
      id: "Paket Trip — Gambar Hero",
    },
    entries: [
      {
        owner: "komododiscoverytour.com",
        href: "http://komododiscoverytour.com/",
        files: ["Trip-Waerebo-Lodge-1D-0N-Hero-Desktop.webp"],
      },
      {
        owner: "@danielkordan",
        href: "https://www.instagram.com/danielkordan/",
        files: ["Trip-Waerebo-Lodge-2D-1N-Hero-Desktop.webp"],
      },
      {
        owner: "@cunca_plias_waterfall",
        href: "https://www.instagram.com/cunca_plias_waterfall/",
        files: ["Trip-Waerebo-Lodge-3D-2N-Hero-Desktop.webp"],
      },
      {
        owner: "Touring Nusantara",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-Hero-Desktop.webp"],
      },
      {
        owner: "Wikipedia",
        href: "https://www.wikipedia.org/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-Hero-Desktop.webp"],
      },
      {
        owner: "Rizky Ramadhan",
        files: ["Trip-Waerebo-Lodge-Custom-Hero-Desktop.webp"],
      },
    ],
  },
  {
    id: "trip-gallery",
    title: {
      en: "Trip Package — Gallery Images",
      id: "Paket Trip — Gambar Galeri",
    },
    entries: [
      {
        owner: "adventurearchipelago.com",
        href: "http://adventurearchipelago.com/",
        files: [
          "Trip-Waerebo-Lodge-1D-0N-04.webp",
          "Trip-Waerebo-Lodge-2D-1N-04.webp",
          "Trip-Waerebo-Lodge-3D-2N-09.webp",
        ],
      },
      {
        owner: "finansialku.com",
        href: "https://finansialku.com",
        files: ["Trip-Waerebo-Lodge-2D-1N-06.webp"],
      },
      {
        owner: "@memepua",
        href: "https://instagram.com/memepua",
        files: ["Trip-Waerebo-Lodge-2D-1N-09.webp"],
      },
      {
        owner: "@forean_agun",
        href: "https://www.tiktok.com/@forean_agun",
        files: ["Trip-Waerebo-Lodge-3D-2N-03.webp"],
      },
      {
        owner: "@fzndianz",
        href: "https://www.instagram.com/fzndianz/",
        files: ["Trip-Waerebo-Lodge-3D-2N-10.webp"],
      },
      {
        owner: "Aldomarung",
        files: ["Trip-Waerebo-Lodge-3D-2N-04.webp"],
      },
      {
        owner: "Alief Baldwin",
        files: ["Trip-Waerebo-Lodge-3D-2N-14.webp"],
      },
      {
        owner: "Mawatu.co.id",
        href: "http://mawatu.co.id/",
        files: ["Trip-Waerebo-Lodge-3D-2N-01.webp"],
      },
      {
        owner: "@cunca_plias_waterfall",
        href: "https://www.instagram.com/cunca_plias_waterfall/",
        files: [
          "Trip-Waerebo-Lodge-3D-2N-02.webp",
          "Trip-Waerebo-Lodge-4D-3N-Island-Escape-02.webp",
        ],
      },
      {
        owner: "Garry Rudolf Liu",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-01.webp"],
      },
      {
        owner: "Indonesia Tourism",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-03.webp"],
      },
      {
        owner: "@matamerahstudio (YouTube)",
        href: "https://www.youtube.com/@matamerahstudio",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-04.webp"],
      },
      {
        owner: "@gaiaaparma",
        href: "https://www.instagram.com/gaiaaparma",
        files: [
          "Trip-Waerebo-Lodge-4D-3N-Island-Escape-09.webp",
          "Trip-Waerebo-Lodge-4D-3N-Flores-15.webp",
        ],
      },
      {
        owner: "travelwriter.ws",
        href: "http://travelwriter.ws/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-14.webp"],
      },
      {
        owner: "floresdaytrip.com",
        href: "http://floresdaytrip.com/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-15.webp"],
      },
      {
        owner: "indonesiajuara.asia",
        href: "http://indonesiajuara.asia/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-17.webp"],
      },
      {
        owner: "indonesia.travel",
        href: "https://www.indonesia.travel",
        files: ["Trip-Waerebo-Lodge-4D-3N-Island-Escape-17.webp"],
      },
      {
        owner: "hubud.kemenhub.go.id",
        href: "http://hubud.kemenhub.go.id/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-01.webp"],
      },
      {
        owner: "Rami Cunca",
        href: "https://www.facebook.com/ramicunca",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-02.webp"],
      },
      {
        owner: "@infolabuanbajo",
        href: "https://www.tiktok.com/@infolabuanbajo",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-03.webp"],
      },
      {
        owner: "Patroklos Haralambis",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-04.webp"],
      },
      {
        owner: "museumofwander.com",
        href: "http://museumofwander.com/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-05.webp"],
      },
      {
        owner: "tripadvisor.co.id",
        href: "https://www.tripadvisor.co.id",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-06.webp"],
      },
      {
        owner: "@rensiambangofficial",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-07.webp"],
      },
      {
        owner: "Istimewa",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-08.webp"],
      },
      {
        owner: "Luka Esenko",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-09.webp"],
      },
      {
        owner: "IndonesiaJuara Trip",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-10.webp"],
      },
      {
        owner: "syukaery (Flickr)",
        href: "https://www.flickr.com/photos/ytse-jam/28715362333/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-17.webp"],
      },
      {
        owner: "@danielkordan",
        href: "https://www.instagram.com/danielkordan/",
        files: ["Trip-Waerebo-Lodge-4D-3N-Flores-20.webp"],
      },
    ],
  },
];

export const creditsCopy = {
  title: { en: "Photo Credits", id: "Kredit Foto" },
  intro: {
    en: "Waerebo Lodge gratefully acknowledges the photographers, publications, and creators whose images appear on this site. All images below remain the property of their respective owners and are credited in good faith.",
    id: "Waerebo Lodge berterima kasih kepada para fotografer, media, dan kreator yang karyanya tampil di situs ini. Seluruh gambar di bawah tetap menjadi milik pemiliknya masing-masing dan dicantumkan dengan itikad baik.",
  },
  ownNotice: {
    en: "All other photography and video on this site is © Waerebo Lodge.",
    id: "Seluruh foto dan video lain di situs ini adalah © Waerebo Lodge.",
  },
  takedownHeading: {
    en: "Corrections & Removal Requests",
    id: "Koreksi & Permintaan Penghapusan",
  },
  takedownBody: {
    en: "If you are a rights holder and believe an image has been credited incorrectly or used without proper permission, contact us at waerebolodge@gmail.com. We will correct the credit or remove the image promptly.",
    id: "Jika Anda pemegang hak dan menilai sebuah gambar salah dikreditkan atau digunakan tanpa izin yang semestinya, hubungi kami di waerebolodge@gmail.com. Kami akan segera memperbaiki kredit atau menghapus gambar tersebut.",
  },
  fileLabel: { en: "File", id: "Berkas" },
  filesLabel: { en: "Files", id: "Berkas" },
};
