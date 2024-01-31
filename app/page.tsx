"use client";

import { FlaskConical, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../src/components/controls/Button";
import { Layout } from "../src/layout";
import { TABS } from "./constants";

export default function HomePage() {
  const { setTheme } = useTheme();

  return (
    <Layout
      header={{ background: false, backButton: false }}
      tabBar={{ items: TABS, gridCols: "grid-cols-2" }}
      has={{
        floatingButton: {
          icon: FlaskConical,
          text: "See Preview",
          href: "/preview",
        },
      }}
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-3 gap-2">
          <Button
            text="System"
            icon={SunMoon}
            onClick={() => setTheme("system")}
          />
          <Button text="Light" icon={Sun} onClick={() => setTheme("light")} />
          <Button text="Dark" icon={Moon} onClick={() => setTheme("dark")} />
        </div>
      </div>
    </Layout>
  );
}
