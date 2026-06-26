import { Metadata } from "next";
import { Suspense } from "react";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { BlogCard } from "@/components/blog/blog-card";
import { TagFilter } from "@/components/blog/tag-filter";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "AI & Automation Blog for Alberta Businesses — RosaAI",
  description:
    "Insights on workflow automation, AI implementation, and practical technology for Alberta businesses.",
  openGraph: {
    title: "AI & Automation Blog for Alberta Businesses — RosaAI",
    description:
      "Insights on workflow automation, AI implementation, and practical technology for Alberta businesses.",
    type: "website",
    url: "https://rosaai.ca/blog",
  },
};

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

const blogSource = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(docs, meta),
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const allPages = blogSource.getPages() as unknown as BlogPage[];
  const sortedBlogs = allPages.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedBlogs.flatMap((blog) => blog.data.tags || []))
    ).sort(),
  ];

  const selectedTag = resolvedSearchParams.tag || "All";
  const filteredBlogs =
    selectedTag === "All"
      ? sortedBlogs
      : sortedBlogs.filter((blog) => blog.data.tags?.includes(selectedTag));

  const tagCounts = allTags.reduce(
    (acc, tag) => {
      if (tag === "All") {
        acc[tag] = sortedBlogs.length;
      } else {
        acc[tag] = sortedBlogs.filter((blog) =>
          blog.data.tags?.includes(tag)
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <>
    <Header />
    <div className="min-h-screen bg-background relative font-sans">
      <div className="px-6 md:px-8 pt-28 pb-8 border-b border-border flex flex-col gap-6 min-h-[250px] justify-center relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="font-bold text-4xl md:text-5xl tracking-tight">
              RosaAI Blog
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Practical tips on automation, AI, and modern web design for
              Alberta businesses.
            </p>
          </div>
        </div>
        {allTags.length > 1 && (
          <div className="max-w-6xl mx-auto w-full">
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              tagCounts={tagCounts}
            />
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 md:px-8">
        <Suspense
          fallback={
            <div className="p-12 text-center text-muted-foreground">
              Loading articles...
            </div>
          }
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative overflow-hidden border-x border-border ${
              filteredBlogs.length < 4 ? "border-b" : "border-b-0"
            }`}
          >
            {filteredBlogs.map((blog) => {
              const date = new Date(blog.data.date);
              const formattedDate = formatDate(date);

              return (
                <BlogCard
                  key={blog.url}
                  url={blog.url}
                  title={blog.data.title}
                  description={blog.data.description}
                  date={formattedDate}
                  tags={blog.data.tags}
                  readTime={blog.data.readTime}
                />
              );
            })}
          </div>
        </Suspense>
      </div>
    </div>
    <Footer />
    </>
  );
}
