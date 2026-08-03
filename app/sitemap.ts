import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

const siteUrl = `https://${business.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/priser", "/about", "/contact", "/privatlivspolitik"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
