import { j } from "../../libs/utils";
import { BackButton } from "./BackButton";

export interface HeaderProps {
  background: boolean;
  backButton?: boolean;
  title?: string; // Only visible when headerBackground is true
}

export function Header({ background, backButton, title }: HeaderProps) {
  return background ? (
    <header className="fixed z-10 flex h-12 w-full max-w-3xl items-center justify-center bg-body/50 text-base-900 backdrop-blur transparency-reduce:bg-body transparency-reduce:backdrop-blur-none dark:bg-body-dark/50 dark:text-base-dark-100 dark:transparency-reduce:bg-body-dark sm:left-1/2 sm:h-16 sm:-translate-x-1/2 sm:pl-40">
      {backButton && <BackButton isFloating={false} />}
      {title && (
        <h1
          className={j(
            "w-full px-2 text-center text-lg font-medium sm:text-left sm:text-xl sm:font-semibold",
            backButton ? "sm:pl-24" : "sm:pl-12",
          )}
        >
          {title}
        </h1>
      )}
    </header>
  ) : (
    backButton && (
      <header className="pointer-events-none fixed z-10 flex h-8 w-full max-w-3xl sm:left-1/2 sm:h-12 sm:-translate-x-1/2 sm:pl-40">
        <BackButton isFloating />
      </header>
    )
  );
}
