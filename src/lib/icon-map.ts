import {
  Zap,
  FileText,
  MessageSquare,
  Mail,
  Calendar,
  Database,
  BarChart3,
  ShoppingCart,
  Users,
  Bot,
  Workflow,
  Globe,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  "file-text": FileText,
  "message-square": MessageSquare,
  mail: Mail,
  calendar: Calendar,
  database: Database,
  "bar-chart-3": BarChart3,
  "shopping-cart": ShoppingCart,
  users: Users,
  bot: Bot,
  workflow: Workflow,
  globe: Globe,
};

export function getIcon(key: string): LucideIcon {
  return iconMap[key] || Zap;
}
