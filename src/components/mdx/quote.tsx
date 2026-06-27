export function Quote({
  text,
  author,
  role,
}: {
  text: string;
  author?: string;
  role?: string;
}) {
  return (
    <figure className="my-8 border-l-4 border-primary/40 pl-6 not-prose">
      <blockquote className="text-lg italic leading-relaxed text-foreground/80">
        &ldquo;{text}&rdquo;
      </blockquote>
      {(author || role) && (
        <figcaption className="mt-3 text-sm text-muted-foreground">
          {author && <span className="font-semibold text-foreground">{author}</span>}
          {role && <span> — {role}</span>}
        </figcaption>
      )}
    </figure>
  );
}
