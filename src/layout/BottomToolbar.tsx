import type { LucideIcon } from "lucide-react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { FormEventHandler, MouseEventHandler } from "react";
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { TextInputType } from "../components/forms/TextInput";
import { j } from "../libs/utils";

export interface BottomToolbarProps<T extends FieldValues> {
  primaryButton?: {
    icon?: LucideIcon;
    text?: string;
    isLoading: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    href?: string;
  };
  input?: {
    register: UseFormRegister<T>;
    name: Path<T>;
    options?: RegisterOptions;
    type: TextInputType;
    placeholder: string;
    error?: string;
    onFormSubmit: FormEventHandler<HTMLFormElement | HTMLDivElement>;
  };
  secondaryButtons?: {
    icon: LucideIcon;
    isLoading: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    href?: string;
    type?: "button" | "submit" | "reset";
  }[];
}

export function BottomToolbar<T extends FieldValues>({
  primaryButton,
  input,
  secondaryButtons,
}: BottomToolbarProps<T>) {
  const Tag = input ? "form" : "div";
  const PrimaryIcon = primaryButton?.icon;

  const PrimaryButtonTag = primaryButton?.href ? Link : "button";

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-10 flex w-full sm:bottom-4 sm:mb-[env(safe-area-inset-bottom)] sm:pl-48">
      <div className="w-full border-t border-base-100/75 border-opacity-50 bg-base-100/60 pb-[env(safe-area-inset-bottom)] shadow-upward-sm backdrop-blur transparency-reduce:bg-base-100 transparency-reduce:backdrop-blur-none dark:border-base-dark-900/75 dark:border-opacity-50 dark:bg-base-dark-900/60 dark:transparency-reduce:bg-base-dark-900 sm:mx-auto sm:w-fit sm:rounded-2xl sm:border sm:pb-0 sm:shadow-md">
        <Tag
          onSubmit={input?.onFormSubmit}
          className="pointer-events-auto flex h-[4.25rem] w-full flex-row items-center justify-between gap-2 p-3 sm:w-96"
        >
          {primaryButton && (
            <PrimaryButtonTag
              onClick={primaryButton.onClick}
              type={primaryButton.href ? undefined : "button"}
              href={
                primaryButton.isLoading || primaryButton.disabled
                  ? ""
                  : primaryButton.href ?? ""
              }
              className={j(
                "flex h-full flex-grow select-none items-center justify-center rounded-lg border border-primary-600 bg-primary-600 px-4 py-2 font-medium text-base-50 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-primary-400 dark:bg-primary-400 dark:text-base-dark-950 dark:focus-visible:ring-offset-body-dark",
                primaryButton.isLoading || primaryButton.disabled
                  ? "cursor-not-allowed opacity-50"
                  : "transition-all hover:border-primary-700 hover:bg-primary-700 active:scale-95 dark:hover:border-primary-300 dark:hover:bg-primary-300",
              )}
              disabled={primaryButton.isLoading || primaryButton.disabled}
            >
              {primaryButton.isLoading ? (
                <Loader2 className="flex-none animate-spin" />
              ) : (
                PrimaryIcon && <PrimaryIcon className="flex-none" />
              )}
              {primaryButton.text && (
                <span className="ml-2 mr-1">{primaryButton.text}</span>
              )}
            </PrimaryButtonTag>
          )}
          {input && (
            <input
              {...input.register(input.name, input.options)}
              type={input.type}
              inputMode={input.type === "number" ? "numeric" : input.type}
              aria-invalid={!!input.error}
              placeholder={input.error ?? input.placeholder}
              className={j(
                "h-full min-w-0 flex-1 rounded-lg border border-base-300 bg-white px-3 py-2 text-base-800 placeholder-base-400 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:placeholder-base-dark-600 dark:focus-visible:ring-offset-body-dark [&:not(&:focus-visible)]:hover:bg-base-100 dark:[&:not(&:focus-visible)]:hover:bg-base-dark-800",
                input.error
                  ? "outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body motion-safe:animate-shake dark:ring-offset-body-dark"
                  : "",
              )}
            />
          )}
          {secondaryButtons &&
            secondaryButtons.map((secondaryButton, index) => {
              const Icon = secondaryButton.icon;
              const SecondaryButtonTag = secondaryButton.href ? Link : "button";
              return (
                <SecondaryButtonTag
                  key={index}
                  href={
                    secondaryButton.isLoading || secondaryButton.disabled
                      ? ""
                      : secondaryButton.href ?? ""
                  }
                  onClick={secondaryButton.onClick}
                  className={j(
                    "flex aspect-square h-full items-center justify-center rounded-lg border border-base-300 bg-white text-base-800 shadow-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:focus-visible:ring-offset-body-dark",
                    secondaryButton.isLoading || secondaryButton.disabled
                      ? "cursor-not-allowed opacity-50"
                      : "transition-all hover:bg-base-100 active:scale-95 dark:hover:bg-base-dark-800",
                  )}
                  disabled={
                    secondaryButton.isLoading || secondaryButton.disabled
                  }
                  type={secondaryButton.type ?? "button"}
                >
                  {secondaryButton.isLoading ? (
                    <Loader2 className="flex-none animate-spin" />
                  ) : (
                    <Icon className="flex-none" size={20} />
                  )}
                </SecondaryButtonTag>
              );
            })}
        </Tag>
      </div>
    </div>
  );
}
