"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { j } from "../../libs/utils";

interface BackButtonProps {
  isFloating: boolean;
}

export function BackButton({ isFloating }: BackButtonProps) {
  const router = useRouter();

  const onBackButtonClick = () => {
    router.back();
  };

  return (
    <button
      onClick={onBackButtonClick}
      type="button"
      aria-label="이전 페이지로 돌아가기"
      className={j(
        "absolute left-0 flex aspect-square h-full items-center justify-center pr-0.5 transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-[0.85] dark:focus-visible:ring-offset-body-dark sm:left-48",
        isFloating
          ? "pointer-events-auto m-2 rounded-full bg-base-50/50 text-base-900 shadow backdrop-blur transparency-reduce:bg-base-50 transparency-reduce:backdrop-blur-none dark:bg-base-dark-950/50 dark:text-base-dark-100 dark:transparency-reduce:bg-base-dark-950 sm:shadow-none"
          : "rounded-2xl ring-inset",
      )}
    >
      <ChevronLeft className="transition-colors hover:text-base-600 dark:hover:text-base-dark-400" />
    </button>
  );
}
