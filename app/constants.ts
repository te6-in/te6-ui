import { Home, MousePointerSquareDashed, Settings } from "lucide-react";
import type { Tabs } from "../src/layout/TabBar/TabBarItem";

export const TABS: Tabs = [
  { text: "Home", href: "/", icon: Home },
  { text: "Settings", href: "/settings", icon: Settings },
  { text: "Ladle", href: "/ladle", icon: MousePointerSquareDashed },
];
