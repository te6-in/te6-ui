import { Check } from "lucide-react";
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { j } from "../../libs/utils";
import { InputDescription, InputTitle } from "../forms/InputLabels";

interface CheckboxProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  options?: RegisterOptions;
  title: string;
  description?: string;
}

export function Checkbox<T extends FieldValues>({
  register,
  options,
  title,
  description,
  name,
}: CheckboxProps<T>) {
  return (
    <div className="flex w-full flex-col transition-opacity">
      <div
        className={j(
          "group flex items-center justify-between gap-1.5",
          options?.disabled ? "cursor-not-allowed" : "cursor-pointer",
        )}
      >
        <div
          className={j(
            "relative size-5",
            options?.disabled
              ? "opacity-50"
              : "transition-transform group-active:scale-90",
          )}
        >
          <input
            {...register(name, options)}
            type="checkbox"
            id={name}
            className="peer size-full cursor-pointer appearance-none rounded-lg border border-base-300 bg-white text-base-800 shadow-sm transition-all checked:border-primary-600 checked:bg-primary-600 checked:text-base-50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body enabled:hover:bg-base-100 enabled:checked:hover:border-primary-700 enabled:checked:hover:bg-primary-700 disabled:cursor-not-allowed dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:checked:border-primary-400 dark:checked:bg-primary-400 dark:checked:text-base-dark-950 dark:focus-visible:ring-offset-body-dark enabled:dark:hover:bg-base-dark-800 dark:enabled:checked:hover:border-primary-300 dark:enabled:checked:hover:bg-primary-300"
          />
          <Check
            size={14}
            strokeWidth={4}
            className="transition-opcity pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-50 opacity-0 peer-checked:opacity-100 dark:text-base-dark-950"
          />
        </div>
        <InputTitle
          as="label"
          text={title}
          htmlFor={name}
          disabled={options?.disabled}
          required={!!options?.required}
        />
      </div>
      {description && (
        <InputDescription
          text={description}
          className="ml-[1.625rem]"
          disabled={options?.disabled}
        />
      )}
    </div>
  );
}
