import { Fragment } from "react";
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { j } from "../../libs/utils";
import { InputError, InputLabel } from "./InputLabels";

export type TextInputType = "text" | "number" | "email" | "tel" | "url";

interface TextInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  options?: RegisterOptions;
  title: string;
  type: TextInputType;
  placeholder: string;
  prefix?: string;
  suffix?: string;
  error?: string;
}

export function TextInput<T extends FieldValues>({
  register,
  name,
  options,
  type,
  title,
  placeholder,
  prefix,
  suffix,
  error,
}: TextInputProps<T>) {
  const Tag = prefix ?? suffix ? "div" : Fragment;

  return (
    <div className="flex w-full flex-col">
      <div
        className={j(
          "mb-1 flex flex-wrap justify-between px-1 text-sm font-medium",
          options?.disabled ? "opacity-50" : "",
        )}
      >
        <InputLabel
          as="label"
          text={title}
          htmlFor={name}
          required={!!options?.required}
        />
        {error && <InputError text={error} />}
      </div>
      <Tag
        {...(Tag === Fragment
          ? {}
          : {
              className: j(
                "rounded-lg shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-accent-500 focus-within:ring-offset-2 focus-within:ring-offset-body focus:outline-none dark:focus-within:ring-offset-body-dark flex transition-all",
                error
                  ? "outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark"
                  : "",
                options?.disabled ? "cursor-not-allowed opacity-50" : "",
              ),
            })}
      >
        {prefix && (
          <span className="flex flex-none select-none items-center justify-center rounded-l-lg border border-r-0 border-base-300 bg-base-100 px-3 pb-0.5 text-sm text-base-600 dark:border-base-dark-700 dark:bg-base-dark-800 dark:text-base-dark-400">
            {prefix}
          </span>
        )}
        <input
          {...register(name, options)}
          type={type}
          inputMode={type === "number" ? "numeric" : type}
          id={name}
          aria-invalid={!!error}
          className={j(
            "w-full border border-base-300 bg-white px-3 py-2 text-base-800 placeholder-base-400 transition-all focus:outline-none dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:placeholder-base-dark-600 enabled:[&:not(&:focus-visible)]:hover:bg-base-100 dark:enabled:[&:not(&:focus-visible)]:hover:bg-base-dark-800",
            prefix || suffix ? "disabled:cursor-not-allowed" : "",
            prefix && suffix
              ? "rounded-none" /* for Safari */
              : prefix
                ? "rounded-l-none rounded-r-lg" /* for Safari */
                : suffix
                  ? "rounded-l-lg rounded-r-none" /* for Safari */
                  : j(
                      "rounded-lg shadow-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-body-dark",
                      error
                        ? "outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark"
                        : "",
                    ),
          )}
          placeholder={placeholder}
        />
        {suffix && (
          <span className="flex flex-none select-none items-center justify-center rounded-r-lg border border-l-0 border-base-300 bg-base-100 px-3 pb-0.5 text-sm text-base-600 dark:border-base-dark-700 dark:bg-base-dark-800 dark:text-base-dark-400">
            {suffix}
          </span>
        )}
      </Tag>
    </div>
  );
}
