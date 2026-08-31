import type { MetadataRoute } from "next";
import { destinations } from "./destination/data";
import { rooms } from "./rooms/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/trips", priority: 0.9 },
    { path: "/lodge", priority: 0.9 },
    { path: "/restaurant", priority: 0.8 },
    { path: "/transport", priority: 0.8 },
    { path: "/gallery", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/terms", priority: 0.3 },
    { path: "/privacy", priority: 0.3 },
    { path: "/credits", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));

  const roomRoutes: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${SITE_URL}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map(
    (destination) => ({
      url: `${SITE_URL}/destination/${destination.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...roomRoutes, ...destinationRoutes];
}
