"use client";

import { ChevronRight, Github, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout } from "../../src/layout";
import { TABS } from "../constants";

export default function SettingsPage() {
  const pathname = usePathname();

  return (
    <Layout
      header={{ title: "Settings", background: true, backButton: false }}
      tabBar={{ items: TABS, gridCols: "grid-cols-3" }}
      has={{
        floatingButton: {
          icon: Github,
          text: "Visit GitHub",
          href: "https://github.com/te6-in/te6-ui",
        },
      }}
    >
      <div className="flex flex-col gap-4 px-2 py-4">
        <ul>
          <li>
            <Link
              href={`${pathname}/theme`}
              className="flex items-center justify-between rounded-2xl bg-base-200 p-6 text-lg font-semibold transition-all hover:bg-base-300 active:scale-95 dark:bg-base-dark-800 dark:hover:bg-base-dark-700"
            >
              <div className="flex items-center gap-2 text-base-900 dark:text-base-dark-100">
                <Palette className="flex-none" />
                <span>Theme</span>
              </div>
              <ChevronRight
                className="flex-none text-base-500 dark:text-base-dark-500"
                size={20}
                strokeWidth={2.5}
              />
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
