export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="my-6 flex items-center gap-4 rounded-xl border border-border/60 bg-card p-6 not-prose">
      <span className="text-3xl font-bold tracking-tight text-primary">
        {value}
      </span>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
