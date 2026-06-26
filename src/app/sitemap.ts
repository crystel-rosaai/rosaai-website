import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rosaai.ca";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/automations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic blog posts from MDX content directory
  const blogContentDir = path.join(process.cwd(), "blog", "content");
  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const files = fs.readdirSync(blogContentDir);
    blogPages = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const fileStat = fs.statSync(path.join(blogContentDir, file));
        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: fileStat.mtime,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        };
      });
  } catch {
    // Blog content directory may not exist in all environments
  }

  return [...staticPages, ...blogPages];
}
