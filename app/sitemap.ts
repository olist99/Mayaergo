import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

const siteUrl = `https://${business.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/ydelser", "/priser", "/om-os", "/kontakt", "/privatlivspolitik"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
