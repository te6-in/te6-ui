"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "../../../src/components/Skeleton";
import { Button } from "../../../src/components/controls/Button";
import { Layout } from "../../../src/layout";
import { TABS } from "../../constants";

export default function ThemePage() {
  const { setTheme } = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout
      header={{ title: "Theme", background: true, backButton: true }}
      tabBar={{ items: TABS, gridCols: "grid-cols-3" }}
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
        <p className="px-1.5 text-base-700 dark:text-base-dark-300">
          {isLoading ? (
            <Skeleton lines={14.3} textClass="text-base" />
          ) : (
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,error. Soluta repellendus optio tenetur beatae, repudiandae nesciuntprovident ea aliquam facere hic perferendis sint repellat officiacorporis nisi eaque nemo. Lorem ipsum dolor sit amet consecteturadipisicing elit. Cupiditate, error. Soluta repellendus optio teneturbeatae, repudiandae nesciunt provident ea aliquam facere hicperferendis sint repellat officia corporis nisi eaque nemo. Loremipsum dolor sit amet consectetur adipisicing elit. Cupiditate, error.Soluta repellendus optio tenetur beatae, repudiandae nesciuntprovident ea aliquam facere hic perferendis sint repellat officiacorporis nisi eaque nemo. Lorem ipsum dolor sit amet consecteturadipisicing elit. Cupiditate, error. Soluta repellendus optio teneturbeatae, repudiandae nesciunt provident ea aliquam facere hicperferendis sint repellat officia corporis nisi eaque nemo. Loremipsum dolor sit amet consectetur adipisicing elit. Cupiditate, error.Soluta repellendus optio tenetur beatae, repudiandae nesciuntprovident ea aliquam facere hic perferendis sint repellat officiacorporis nisi eaque nemo. Lorem ipsum dolor sit amet consecteturadipisicing elit. Cupiditate, error. Soluta repellendus optio teneturbeatae, repudiandae nesciunt provident ea aliquam facere hicperferendis sint repellat officia corporis nisi eaque nemo.`
          )}
        </p>
        <img
          src="https://source.unsplash.com/random"
          alt="Random Image"
          className="rounded-xl"
        />
      </div>
    </Layout>
  );
}
