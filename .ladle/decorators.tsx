import type { ReactNode } from "react";

interface DecoratorProps {
  children: ReactNode;
}

export function CenterPadded({ children }: DecoratorProps) {
  return (
    <div className="flex h-full items-center justify-center bg-body p-4 dark:bg-body-dark">
      {children}
    </div>
  );
}
