import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface AutomationData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: string;
  gradient: string;
  metric: string;
  details: string[];
  order: number;
  thumbnail?: string;
  body: string;
}

const automationsDir = path.join(process.cwd(), "content/automations");

export function getAutomations(): AutomationData[] {
  if (!fs.existsSync(automationsDir)) return [];

  const files = fs
    .readdirSync(automationsDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const automations = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(automationsDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      longDescription: data.longDescription || "",
      tags: data.tags || [],
      icon: data.icon || "zap",
      gradient: data.gradient || "from-brand-purple to-brand-teal",
      metric: data.metric || "",
      details: data.details || [],
      order: data.order ?? 10,
      thumbnail: data.thumbnail || undefined,
      body: content,
    } as AutomationData;
  });

  return automations.sort((a, b) => a.order - b.order);
}

export function getAutomation(slug: string): AutomationData | undefined {
  return getAutomations().find((a) => a.slug === slug);
}
