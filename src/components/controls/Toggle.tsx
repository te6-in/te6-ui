import type { Dispatch, SetStateAction } from "react";
import { j } from "../../libs/utils";
import { InputDescription, InputTitle } from "../forms/InputLabels";

interface ToggleProps {
  title: string;
  description?: string;
  disabled?: boolean;
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
}

export function Toggle({
  title,
  description,
  disabled,
  isOn,
  setIsOn,
}: ToggleProps) {
  return (
    <div className="flex w-full -translate-x-[0.0625rem] flex-col">
      <label className="group flex items-center justify-between gap-1.5">
        <InputTitle as="span" text={title} disabled={disabled} />
        <input
          type="checkbox"
          className="peer size-0"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
          disabled={disabled}
        />
        <span
          className={j(
            "relative h-6 w-10 rounded-full border border-base-300 bg-white text-base-800 shadow-sm transition-all after:absolute after:top-1 after:h-4 after:w-4 after:-translate-y-[0.0625rem] after:translate-x-1 after:rounded-full after:bg-base-300 after:transition-all focus:outline-none peer-checked:after:translate-x-[1.125rem] peer-checked:after:border-primary-600 peer-checked:after:bg-primary-600 peer-checked:after:text-base-50 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-accent-500 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:after:bg-base-dark-700  dark:peer-checked:after:border-primary-400 dark:peer-checked:after:bg-primary-400 dark:peer-checked:after:text-base-dark-950  dark:peer-focus-visible:ring-offset-body-dark",
            disabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer group-hover:after:translate-x-1.5 group-hover:after:bg-base-400 group-active:after:scale-90 group-hover:peer-checked:after:translate-x-4 group-hover:peer-checked:after:border-primary-700 group-hover:peer-checked:after:bg-primary-700 dark:group-hover:after:bg-base-dark-600 dark:group-hover:peer-checked:after:border-primary-300 dark:group-hover:peer-checked:after:bg-primary-300",
          )}
        ></span>
      </label>
      {description && (
        <InputDescription text={description} disabled={disabled} />
      )}
    </div>
  );
}
