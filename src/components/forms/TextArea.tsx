import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { j } from "../../libs/utils";
import { InputError, InputLabel } from "./InputLabels";

interface TextAreaProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  options?: RegisterOptions;
  title: string;
  rows: number;
  placeholder: string;
  error?: string;
}

export function TextArea<T extends FieldValues>({
  register,
  name,
  options,
  title,
  rows,
  placeholder,
  error,
}: TextAreaProps<T>) {
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
      <textarea
        {...register(name, options)}
        aria-invalid={!!error}
        rows={rows}
        id={name}
        placeholder={placeholder}
        className={j(
          "w-full resize-none rounded-lg border border-base-300 bg-white px-3 py-2 text-base-800 placeholder-base-400 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body disabled:cursor-not-allowed disabled:opacity-50 dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:placeholder-base-dark-600 dark:focus-visible:ring-offset-body-dark enabled:[&:not(&:focus-visible)]:hover:bg-base-100 dark:enabled:[&:not(&:focus-visible)]:hover:bg-base-dark-800",
          error
            ? "outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark"
            : "",
        )}
      />
    </div>
  );
}
