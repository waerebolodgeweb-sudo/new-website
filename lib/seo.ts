import type { Metadata } from "next";

export const SITE_URL = "https://waerebo-lodge.com";
export const SITE_NAME = "Waerebo Lodge";
export const DEFAULT_DESCRIPTION =
  "The perfect basecamp before your trek to Waerebo village, nestled in the highlands of Flores, Indonesia.";

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/home/hero.png",
  width: 1512,
  height: 800,
  alt: "Waerebo Lodge surrounded by the rice fields of Flores",
};

type SeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function createMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
}: SeoMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      alternateLocale: ["id_ID"],
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
