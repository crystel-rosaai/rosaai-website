import type { Metadata } from "next";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getAuthor, isValidAuthor } from "@/lib/authors";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogPostingJsonLd } from "@/components/seo/json-ld";

interface PageProps {
  params: Promise<{ slug: string }>;
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

export async function generateStaticParams() {
  const pages = blogSource.getPages();
  return pages.map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  if (!page) {
    return {};
  }

  const data = page.data as any;

  return {
    title: `${data.title} — RosaAI Blog`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      url: `https://rosaai.ca/blog/${slug}`,
      publishedTime: data.date,
      authors: data.author ? ["Crystel Cortez"] : undefined,
      tags: data.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const page = blogSource.getPage([slug]);

  if (!page) {
    notFound();
  }

  const data = page.data as any;
  const MDX = data.body;
  const date = new Date(data.date);
  const formattedDate = formatDate(date);
  const author =
    data.author && isValidAuthor(data.author)
      ? getAuthor(data.author)
      : null;

  return (
    <>
    <Header />
    <BlogPostingJsonLd
      title={data.title}
      description={data.description}
      datePublished={data.date}
      slug={slug}
      authorName={author?.name || "Crystel Cortez"}
    />
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 md:px-8 pt-28 pb-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: data.title },
            ]}
          />

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {data.tags &&
              data.tags.length > 0 &&
              data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="h-6 w-fit px-2.5 text-xs font-medium bg-primary/10 text-primary rounded-md flex items-center justify-center"
                >
                  {tag}
                </span>
              ))}
            <time className="font-medium">{formattedDate}</time>
            {data.readTime && (
              <>
                <span className="text-border">·</span>
                <span>{data.readTime}</span>
              </>
            )}
          </div>

          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
            {data.title}
          </h1>

          {data.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          )}

          {author && (
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/60">
              <Image
                src={author.avatar}
                alt={author.name}
                width={44}
                height={44}
                className="rounded-full object-cover h-11 w-11"
              />
              <div>
                <p className="text-sm font-semibold">{author.name}</p>
                <p className="text-xs text-muted-foreground">
                  {author.position}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Article content */}
      <article className="mx-auto max-w-3xl px-6 md:px-8 py-10 md:py-14">
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-base prose-p:leading-7 prose-p:text-foreground/80 prose-p:mb-5 prose-li:text-foreground/80 prose-li:leading-7 prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
          <MDX />
        </div>
      </article>

      {/* Back link */}
      <div className="mx-auto max-w-3xl px-6 md:px-8 pb-16">
        <div className="pt-8 border-t border-border/60">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
