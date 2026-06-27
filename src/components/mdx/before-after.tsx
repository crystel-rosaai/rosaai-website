export function BeforeAfter({
  beforeTitle = "Before",
  beforeContent,
  afterTitle = "After",
  afterContent,
}: {
  beforeTitle?: string;
  beforeContent: string;
  afterTitle?: string;
  afterContent: string;
}) {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 not-prose">
      <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/20">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
          {beforeTitle}
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          {beforeContent}
        </p>
      </div>
      <div className="rounded-xl border border-green-200 bg-green-50/50 p-5 dark:border-green-900 dark:bg-green-950/20">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
          {afterTitle}
        </p>
        <p className="text-sm leading-relaxed text-foreground/80">
          {afterContent}
        </p>
      </div>
    </div>
  );
}
