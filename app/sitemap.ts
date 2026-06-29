import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stegadrivingschool.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/book`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
