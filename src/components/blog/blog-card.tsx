import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  url: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  readTime?: string;
}

export function BlogCard({
  url,
  title,
  description,
  date,
  tags,
  readTime,
}: BlogCardProps) {
  return (
    <Link
      href={url}
      className="group block relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-0 after:h-px after:w-screen after:bg-border after:content-['']"
    >
      <div className="flex flex-col p-6 gap-3 h-full">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="h-6 w-fit px-2.5 text-xs font-medium bg-primary/10 text-primary rounded-md flex items-center justify-center"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-xl font-semibold text-card-foreground group-hover:underline underline-offset-4 tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm flex-1">{description}</p>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <time className="font-medium">{date}</time>
          {readTime && (
            <>
              <span className="text-border">·</span>
              <span>{readTime}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
