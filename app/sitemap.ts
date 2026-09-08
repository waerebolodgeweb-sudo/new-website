import type { MetadataRoute } from "next";
import { destinations } from "./destination/data";
import { rooms } from "./rooms/data";
import { SITE_URL } from "@/lib/seo";

// Update these dates only when the page's indexed content materially changes.
// Deployment, styling, and implementation-only changes must not update <lastmod>.
const contentLastModified = {
  home: "2026-09-08",
  about: "2026-09-08",
  trips: "2026-08-26",
  lodge: "2026-09-08",
  restaurant: "2026-07-06",
  transport: "2026-07-06",
  gallery: "2026-09-08",
  faq: "2026-08-26",
  legal: "2026-08-31",
  credits: "2026-09-08",
  rooms: "2026-09-08",
  destinations: "2026-07-20",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1, lastModified: contentLastModified.home },
    { path: "/about", priority: 0.8, lastModified: contentLastModified.about },
    { path: "/trips", priority: 0.9, lastModified: contentLastModified.trips },
    { path: "/lodge", priority: 0.9, lastModified: contentLastModified.lodge },
    {
      path: "/restaurant",
      priority: 0.8,
      lastModified: contentLastModified.restaurant,
    },
    {
      path: "/transport",
      priority: 0.8,
      lastModified: contentLastModified.transport,
    },
    {
      path: "/gallery",
      priority: 0.7,
      lastModified: contentLastModified.gallery,
    },
    { path: "/faq", priority: 0.6, lastModified: contentLastModified.faq },
    { path: "/terms", priority: 0.3, lastModified: contentLastModified.legal },
    {
      path: "/privacy",
      priority: 0.3,
      lastModified: contentLastModified.legal,
    },
    {
      path: "/credits",
      priority: 0.3,
      lastModified: contentLastModified.credits,
    },
  ].map(({ path, priority, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));

  const roomRoutes: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${SITE_URL}/rooms/${room.slug}`,
    lastModified: contentLastModified.rooms,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map(
    (destination) => ({
      url: `${SITE_URL}/destination/${destination.slug}`,
      lastModified: contentLastModified.destinations,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...roomRoutes, ...destinationRoutes];
}
