import { FlaskConical, Home, MousePointerSquareDashed } from "lucide-react";
import type { Tabs } from "../src/layout/TabBar/TabBarItem";

export const TABS: Tabs = [
  { text: "Home", href: "/", icon: Home },
  { text: "Preview", href: "/preview", icon: FlaskConical },
  { text: "Ladle", href: "/ladle", icon: MousePointerSquareDashed },
];
