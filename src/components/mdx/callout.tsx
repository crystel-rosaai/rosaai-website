import { Info, Lightbulb, AlertTriangle } from "lucide-react";

const styles = {
  info: {
    border: "border-blue-200 dark:border-blue-800",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    icon: Info,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  tip: {
    border: "border-green-200 dark:border-green-800",
    bg: "bg-green-50 dark:bg-green-950/30",
    icon: Lightbulb,
    iconColor: "text-green-600 dark:text-green-400",
  },
  warning: {
    border: "border-amber-200 dark:border-amber-800",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    icon: AlertTriangle,
    iconColor: "text-amber-600 dark:text-amber-400",
  },
};

export function Callout({
  type = "info",
  title,
  content,
}: {
  type?: "info" | "tip" | "warning";
  title?: string;
  content: string;
}) {
  const style = styles[type] || styles.info;
  const Icon = style.icon;

  return (
    <div
      className={`my-6 rounded-xl border ${style.border} ${style.bg} p-5 not-prose`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.iconColor}`} />
        <div>
          {title && (
            <p className="mb-1 font-semibold text-foreground">{title}</p>
          )}
          <p className="text-sm leading-relaxed text-foreground/80">{content}</p>
        </div>
      </div>
    </div>
  );
}
