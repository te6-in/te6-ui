import type { LucideIcon } from "lucide-react";
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { j } from "../../libs/utils";
import { InputError, InputLabel } from "./InputLabels";

interface Item {
  value: string;
  icon: LucideIcon;
}

interface SelectorProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  options?: RegisterOptions;
  title: string;
  items: Item[];
  gridCols:
    | "grid-cols-1"
    | "grid-cols-2"
    | "grid-cols-3"
    | "grid-cols-4"
    | "grid-cols-5"
    | "grid-cols-6"
    | "grid-cols-7"
    | "grid-cols-8"
    | "grid-cols-9"
    | "grid-cols-10"
    | "grid-cols-11"
    | "grid-cols-12";
  error?: string;
}

export function Selector<T extends FieldValues>({
  register,
  name,
  options,
  items,
  title,
  gridCols,
  error,
}: SelectorProps<T>) {
  return (
    <div
      className={j(
        "flex w-full flex-col",
        options?.disabled ? "opacity-50" : "",
      )}
    >
      <div className="mb-1 flex flex-wrap justify-between px-1 text-sm font-medium">
        <InputLabel as="span" text={title} required={!!options?.required} />
        {error && <InputError text={error} />}
      </div>
      <fieldset
        disabled={options?.disabled}
        aria-invalid={!!error}
        className={j(
          "grid gap-1.5 rounded-lg border border-base-300 bg-white p-2 pb-1.5 text-base-800 shadow-sm dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200",
          error
            ? "outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark"
            : "",
          gridCols,
        )}
      >
        {items.map((item, index) => (
          <Input
            key={index}
            register={register}
            options={options}
            item={item}
            name={name}
          />
        ))}
      </fieldset>
    </div>
  );
}

interface InputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  options?: RegisterOptions;
  item: Item;
}

function Input<T extends FieldValues>({
  register,
  name,
  options,
  item: { value, icon: Icon },
}: InputProps<T>) {
  return (
    <label
      className={j(
        "group flex flex-col gap-1",
        options?.disabled
          ? "cursor-not-allowed"
          : "cursor-pointer transition-all active:scale-95",
      )}
    >
      <div className="relative">
        <input
          {...register(name, options)}
          className="peer flex h-11 w-full appearance-none items-center justify-center rounded border border-base-300 bg-white text-base-800 shadow-sm transition-all checked:border-primary-600 checked:bg-primary-600 checked:text-base-50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body enabled:cursor-pointer disabled:cursor-not-allowed enabled:group-hover:bg-base-100 enabled:group-hover:checked:border-primary-700 enabled:group-hover:checked:bg-primary-700 dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:checked:border-primary-400 dark:checked:bg-primary-400 dark:checked:text-base-dark-950 dark:focus-visible:ring-offset-body-dark dark:enabled:group-hover:bg-base-dark-800 dark:enabled:group-hover:checked:border-primary-300 dark:enabled:group-hover:checked:bg-primary-300"
          value={value}
          type="radio"
        />
        <Icon
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-800 peer-checked:text-base-50 dark:text-base-dark-200 dark:peer-checked:text-base-dark-950"
          size={20}
        />
      </div>
      <div className="px-0.5 text-center text-xs font-medium text-base-500 dark:text-base-dark-500">
        {value}
      </div>
    </label>
  );
}
