/* ── Photo attribution registry ──
 *
 * Legal notice source of truth. Every third-party image used on the site is
 * credited here with a preview image and a link back to the original owner where one
 * is available. Rendered publicly at /credits and referenced from the footer
 * and the Terms & Conditions page.
 */

export type Localized = { en: string; id: string };

export interface CreditEntry {
  /** Owner / photographer / publication, as supplied by the rights holder */
  owner: string;
  /** Canonical link to the owner, when one exists */
  href?: string;
  /** Preview files for this credit */
  files: string[];
}

export interface CreditGroup {
  id: string;
  title: Localized;
  entries: CreditEntry[];
}

/* Credit previews live under /public/copyright. Keep the original trip
 * images for attributions whose replacement still needs confirmation. */
const TRIP_ROOT = "/Trip Package";

export function creditImageSrc(file: string): string {
  if (!file.startsWith("Trip-Waerebo-Lodge-")) {
    return `/copyright/${encodeURIComponent(file)}`;
  }

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
        files: ["komododiscoverytour.com.webp"],
      },
      {
        owner: "@danielkordan",
        href: "https://www.instagram.com/danielkordan/",
        files: ["@danielkordan.webp"],
      },
      {
        owner: "@cunca_plias_waterfall",
        href: "https://www.instagram.com/cunca_plias_waterfall/",
        files: ["@cunca_plias_waterfall.webp"],
      },
      {
        owner: "Touring Nusantara",
        files: ["Touring Nusantara.webp"],
      },
      {
        owner: "Wikipedia",
        href: "https://www.wikipedia.org/",
        files: ["Wikipedia.webp"],
      },
      {
        owner: "Rizky Ramadhan",
        files: ["Rizky Ramadhan.webp"],
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
        files: ["adventurearchipelago.com.webp"],
      },
      {
        owner: "finansialku.com",
        href: "https://finansialku.com",
        files: ["finansialku.com.webp"],
      },
      {
        owner: "@memepua",
        href: "https://instagram.com/memepua",
        files: ["@memepua.webp"],
      },
      {
        owner: "@forean_agun",
        href: "https://www.tiktok.com/@forean_agun",
        files: ["@forean_agun.webp"],
      },
      {
        owner: "@fzndianz",
        href: "https://www.instagram.com/fzndianz/",
        files: ["@fzndianz.webp"],
      },
      {
        owner: "Aldomarung",
        files: ["Aldomarung.webp"],
      },
      {
        owner: "Alief Baldwin",
        files: ["Alief Baldwin.webp"],
      },
      {
        owner: "Mawatu.co.id",
        href: "http://mawatu.co.id/",
        files: ["Mawatu.co.id.webp"],
      },
      {
        owner: "@cunca_plias_waterfall",
        href: "https://www.instagram.com/cunca_plias_waterfall/",
        files: ["@cunca_plias_waterfall-2.webp"],
      },
      {
        owner: "Garry Rudolf Liu",
        files: ["Garry Rudolf Liu.webp"],
      },
      {
        owner: "Indonesia Tourism",
        files: ["Indonesia Tourism.webp"],
      },
      {
        owner: "@matamerahstudio (YouTube)",
        href: "https://www.youtube.com/@matamerahstudio",
        files: ["@matamerahstudio (YouTube).webp"],
      },
      {
        owner: "@gaiaaparma",
        href: "https://www.instagram.com/gaiaaparma",
        files: ["@gaiaaparma.webp"],
      },
      {
        owner: "travelwriter.ws",
        href: "http://travelwriter.ws/",
        files: ["travelwriter.ws.webp"],
      },
      {
        owner: "floresdaytrip.com",
        href: "http://floresdaytrip.com/",
        files: ["floresdaytrip.com.webp"],
      },
      {
        owner: "indonesiajuara.asia",
        href: "http://indonesiajuara.asia/",
        files: ["indonesiajuara.asia.webp"],
      },
      {
        owner: "hubud.kemenhub.go.id",
        href: "http://hubud.kemenhub.go.id/",
        files: ["hubud.kemenhub.go.id.webp"],
      },
      {
        owner: "Rami Cunca",
        href: "https://www.facebook.com/ramicunca",
        files: ["Rami Cunca.webp"],
      },
      {
        owner: "@infolabuanbajo",
        href: "https://www.tiktok.com/@infolabuanbajo",
        files: ["@infolabuanbajo.webp"],
      },
      {
        owner: "Patroklos Haralambis",
        files: ["Patroklos Haralambis.webp"],
      },
      {
        owner: "museumofwander.com",
        href: "http://museumofwander.com/",
        files: ["museumofwander.com.webp"],
      },
      {
        owner: "tripadvisor.co.id",
        href: "https://www.tripadvisor.co.id",
        files: ["tripadvisor.co.id.webp"],
      },
      {
        owner: "@rensiambangofficial",
        files: ["@rensiambangofficial.webp"],
      },
      {
        owner: "Istimewa",
        files: ["Istimewa.webp"],
      },
      {
        owner: "Luka Esenko",
        files: ["Luka Esenko.webp"],
      },
      {
        owner: "IndonesiaJuara Trip",
        files: ["IndonesiaJuara Trip.webp"],
      },
      {
        owner: "syukaery (Flickr)",
        href: "https://www.flickr.com/photos/ytse-jam/28715362333/",
        files: ["syukaery (Flickr).webp"],
      },
      {
        owner: "@danielkordan",
        href: "https://www.instagram.com/danielkordan/",
        files: ["@danielkordan.webp"],
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
