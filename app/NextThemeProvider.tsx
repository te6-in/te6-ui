"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

interface NextThemeProviderProps {
  children: ReactNode;
}

export function NextThemeProvider({ children }: NextThemeProviderProps) {
  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>;
}
