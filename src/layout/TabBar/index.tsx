import { j } from "../../libs/utils";
import type { Tabs } from "./TabBarItem";
import { TabBarItem } from "./TabBarItem";

export interface TabBarProps {
  hideOnMobile?: boolean;
  items: Tabs;
  gridCols:
    | "grid-cols-2"
    | "grid-cols-3"
    | "grid-cols-4"
    | "grid-cols-5"
    | "grid-cols-6";
}

export function TabBar({ hideOnMobile, items, gridCols }: TabBarProps) {
  return (
    <nav>
      <ul
        className={j(
          "transparency-reduce:backdrop-blur-none-none fixed bottom-0 z-10 h-[calc(3.5rem+env(safe-area-inset-bottom))] w-full border-t border-base-100/75 border-opacity-50 bg-base-100/60 pb-[env(safe-area-inset-bottom)] shadow-upward-sm backdrop-blur transparency-reduce:bg-base-100 transparency-reduce:backdrop-blur-none dark:border-base-dark-900/75 dark:border-opacity-50 dark:bg-base-dark-900/60 dark:transparency-reduce:bg-base-dark-900 sm:left-8 sm:top-1/2 sm:flex sm:h-fit sm:max-h-screen sm:w-36 sm:-translate-y-1/2 sm:flex-col sm:gap-1 sm:overflow-auto sm:border-none sm:bg-transparent sm:py-4 sm:shadow-none sm:backdrop-blur sm:dark:bg-transparent",
          hideOnMobile ? "hidden" : "grid",
          gridCols,
        )}
      >
        {items.map((item) => (
          <li key={item.href}>
            <TabBarItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
