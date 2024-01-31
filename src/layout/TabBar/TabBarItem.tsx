"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { j } from "../../libs/utils";

export type Tabs = TabBarItemProps[];

interface TabBarItemProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

export function TabBarItem({ icon: Icon, text, href }: TabBarItemProps) {
  const pathname = usePathname();
  const didMatch = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      className={j(
        "flex h-full flex-col items-center justify-center gap-1 rounded-xl ring-inset transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-95 dark:focus-visible:ring-offset-body-dark sm:flex-row sm:justify-start sm:gap-2 sm:p-4 sm:hover:bg-base-200 dark:sm:hover:bg-base-dark-900",
        didMatch ? "text-primary-500" : "text-base-700 dark:text-base-dark-300",
      )}
      href={href}
    >
      <Icon className="flex-none sm:size-7" size={20} />
      <span className="text-xs font-medium sm:text-base sm:font-semibold">
        {text}
      </span>
    </Link>
  );
}
