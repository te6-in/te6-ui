"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useEffect, useRef } from "react";

type FullScreenOverlayProps = {
  buttonLabel?: string;
  children: ReactNode;
} & (
  | {
      type: "close";
      show: boolean;
      setShow?: Dispatch<SetStateAction<boolean>>;
    }
  | {
      type: "back";
      show?: never;
      setShow?: never;
    }
);

export function FullScreenOverlay({
  show,
  setShow,
  type,
  buttonLabel,
  children,
}: FullScreenOverlayProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const reduceMotion = useReducedMotion();

  const onCloseClick = () => {
    if (setShow) {
      setShow(false);
      document.removeEventListener("keydown", onCloseByEsc);

      setTimeout(
        () => {
          dialogRef.current?.close();
          document.body.style.overflow = "auto";
        },
        reduceMotion ? 350 : 500,
      );
    }
  };

  const onBackClick = () => {
    router.back();
    dialogRef.current?.close();
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", onCloseByEsc);
  };

  const onCloseByEsc = (event: KeyboardEvent) => {
    if (event.key !== "Escape") return;

    event.preventDefault();

    if (type === "close") {
      onCloseClick();
      return;
    }

    if (type === "back") {
      onBackClick();
      return;
    }
  };

  useEffect(() => {
    if (type === "back" || show) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";

      document.addEventListener("keydown", onCloseByEsc);
    }
  }, [show]);

  return (
    <dialog
      role="dialog"
      aria-modal="true"
      ref={dialogRef}
      className="backdrop:bg-transparent"
    >
      <AnimatePresence>
        {(type === "back" || show) && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, bounce: 0.3, type: "spring" }}
              className="fixed inset-0 bg-base-200/70 backdrop-blur transparency-reduce:bg-base-200 transparency-reduce:backdrop-blur-none dark:bg-base-dark-800/70 dark:transparency-reduce:bg-base-dark-800"
            />
            <motion.div
              initial={{ y: reduceMotion ? 0 : -600, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: reduceMotion ? 0 : 600, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.35 : 0.5,
                bounce: 0.3,
                type: "spring",
              }}
              className="fixed inset-0 m-auto my-auto flex h-fit max-h-fullScreenOverlay w-11/12 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-base-300 bg-base-50 shadow-xl dark:border-base-dark-700 dark:bg-base-dark-950 sm:w-[36rem]"
            >
              <div className="relative w-full overflow-y-auto p-7 pb-[5.5rem]">
                {children}
              </div>
              <div className="absolute bottom-0 z-10 flex w-full items-center justify-center border-t border-base-300 bg-base-50/50 backdrop-blur transparency-reduce:bg-base-50 transparency-reduce:backdrop-blur-none dark:border-base-dark-700 dark:bg-base-dark-950/50 dark:transparency-reduce:bg-base-dark-950">
                <button
                  type="button"
                  className="peer relative mx-auto mb-4 mt-3 flex w-fit select-none items-center gap-1 rounded-lg p-2 text-sm font-semibold text-base-800 text-opacity-50 transition-all hover:bg-base-400/20 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-95 dark:text-base-dark-200 dark:text-opacity-50 dark:hover:bg-base-dark-600/20 dark:focus-visible:ring-offset-body-dark"
                  onClick={type === "back" ? onBackClick : onCloseClick}
                >
                  {type === "back" && <ChevronLeft size={20} />}
                  {type === "close" && <X size={20} />}
                  <span className="pr-0.5">
                    {type === "back" && (buttonLabel ?? "이전 페이지로")}
                    {type === "close" && (buttonLabel ?? "닫기")}
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </dialog>
  );
}
