import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextThemeProvider } from "./NextThemeProvider";
import "./globals.css";

// TODO: set proper metadata
export const metadata: Metadata = {
  title: "@te6/ui - Preview",
  description:
    "A collection of UI components for Next.js, built with Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // TODO: set proper language
  return (
    <html lang="en">
      <body className="bg-body dark:bg-body-dark">
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
