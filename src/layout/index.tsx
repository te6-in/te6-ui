import type { ReactNode } from "react";
import type { FieldValues } from "react-hook-form";
import { j } from "../libs/utils";
import { BottomToolbar, BottomToolbarProps } from "./BottomToolbar";
import { FloatingButton, FloatingButtonProps } from "./FloatingButton";
import type { HeaderProps } from "./Header";
import { Header } from "./Header";
import { TabBar, TabBarProps } from "./TabBar";

interface LayoutProps<T extends FieldValues> {
  header?: HeaderProps;
  tabBar: TabBarProps;
  has?: {
    floatingButton?: FloatingButtonProps;
    bottomToolbar?: BottomToolbarProps<T>;
  };
  children: ReactNode;
}

export function Layout<T extends FieldValues>({
  header,
  tabBar,
  has,
  children,
}: LayoutProps<T>) {
  return (
    <div className="bg-body dark:bg-body-dark">
      <div className="fixed left-1/2 top-4 z-50 flex w-full -translate-x-1/2 -translate-y-16 items-center justify-center transition-transform focus-within:translate-y-0">
        <a
          href="#main-content"
          className="rounded-lg border-base-300 bg-white px-3.5 py-2 font-semibold text-base-800 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:focus-visible:ring-offset-body-dark"
        >
          Skip to main content
        </a>
      </div>
      {header && <Header {...header} />}
      <TabBar
        {...tabBar}
        hideOnMobile={!!has?.bottomToolbar || tabBar.hideOnMobile}
      />
      <main
        id="main-content"
        className={j(
          "relative mx-auto min-h-screen max-w-3xl overflow-x-hidden sm:pl-48",
          header?.backButton === true || header?.title
            ? j(
                "sm:scroll-mt-16 sm:pt-16",
                header?.background === true ? "scroll-mt-12 pt-12" : "",
              )
            : "",
          has?.bottomToolbar
            ? "pb-[4.25rem] sm:pb-[5.375rem]"
            : tabBar.hideOnMobile
              ? "pb-0"
              : "",
          has?.floatingButton
            ? j("sm:pb-20", tabBar.hideOnMobile ? "pb-[4.5rem]" : "pb-[8.5rem]")
            : "",
          !has?.floatingButton && !has?.bottomToolbar && !tabBar.hideOnMobile
            ? "pb-[calc(3.5rem+env(safe-area-inset-bottom))] sm:pb-0"
            : "",
        )}
      >
        {children}
        {has?.floatingButton && <FloatingButton {...has?.floatingButton} />}
        {has?.bottomToolbar && <BottomToolbar {...has?.bottomToolbar} />}
      </main>
    </div>
  );
}
