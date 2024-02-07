import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { j } from "../libs/utils";

export interface FloatingButtonProps {
  icon: LucideIcon;
  text?: string;
  href: string;
  isTabBarHiddenOnMobile?: boolean;
}

export function FloatingButton({
  icon: Icon,
  text,
  href,
  isTabBarHiddenOnMobile,
}: FloatingButtonProps) {
  return (
    <Link
      className={j(
        "fixed right-4 z-10 flex items-center justify-center gap-2 rounded-2xl border-primary-600 bg-primary-600 p-4 font-semibold text-base-50 shadow-md transition-all hover:border-primary-700 hover:bg-primary-700 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-95 dark:border-primary-400 dark:bg-primary-400 dark:text-base-dark-950 dark:hover:border-primary-300 dark:hover:bg-primary-300 dark:focus-visible:ring-offset-body-dark sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:right-1/2 sm:translate-x-[calc(50%+6rem)]",
        isTabBarHiddenOnMobile
          ? "bottom-[calc(1rem+env(safe-area-inset-bottom))]"
          : "bottom-[calc(5rem+env(safe-area-inset-bottom))]",
      )}
      href={href}
    >
      <Icon />
      {text}
    </Link>
  );
}
