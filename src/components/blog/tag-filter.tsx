"use client";

import { useRouter, usePathname } from "next/navigation";

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  tagCounts?: Record<string, number>;
}

export function TagFilter({ tags, selectedTag, tagCounts }: TagFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (tag !== "All") {
      params.set("tag", tag);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`h-8 flex items-center px-1 pl-3 rounded-lg cursor-pointer border text-sm transition-colors ${
            selectedTag === tag
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border hover:bg-muted"
          }`}
        >
          <span>{tag}</span>
          {tagCounts?.[tag] !== undefined && (
            <span
              className={`ml-2 text-xs border rounded-md h-6 min-w-6 font-medium flex items-center justify-center ${
                selectedTag === tag
                  ? "border-border/40 bg-background text-primary"
                  : "border-border"
              }`}
            >
              {tagCounts[tag]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
