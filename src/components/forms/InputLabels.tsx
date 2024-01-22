import { j } from "../../libs/utils";

interface InputLabelProps {
  as: "label" | "span";
  text: string;
  required?: boolean;
  htmlFor?: string | undefined;
}

interface InputTitleProps {
  as: "label" | "span";
  text: string;
  disabled?: boolean;
  htmlFor?: string;
  required?: boolean;
}

interface InputDescriptionProps {
  text: string;
  disabled?: boolean;
  className?: string;
}

interface InputErrorProps {
  text?: string;
}

export function InputLabel({ as, text, htmlFor, required }: InputLabelProps) {
  const Tag = as;

  return (
    <Tag
      htmlFor={htmlFor}
      className="mr-1 flex-grow cursor-default leading-tight text-base-700 dark:text-base-dark-300"
    >
      {text}
      {required && (
        <span className="ml-0.5 text-red-500" aria-hidden>
          *
        </span>
      )}
      {required && <span className="sr-only">필수 입력 항목</span>}
    </Tag>
  );
}

export function InputTitle({
  text,
  htmlFor,
  disabled,
  as,
  required,
}: InputTitleProps) {
  const Tag = as;
  return (
    <Tag
      htmlFor={htmlFor}
      className={j(
        "flex-1 font-medium text-base-900 dark:text-base-dark-100",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      )}
    >
      {text}
      {required && (
        <span className="ml-0.5 text-red-500" aria-hidden>
          *
        </span>
      )}
      {required && <span className="sr-only">필수 입력 항목</span>}
    </Tag>
  );
}

export function InputDescription({
  text,
  disabled,
  className,
}: InputDescriptionProps) {
  return (
    <p
      className={j(
        "text-sm text-base-500 dark:text-base-dark-500",
        className ?? "",
        disabled ? "opacity-50" : "",
      )}
    >
      {text}
    </p>
  );
}

export function InputError({ text }: InputErrorProps) {
  return (
    <span
      role="alert"
      className="ml-auto text-right leading-tight text-red-500 motion-safe:animate-shake"
    >
      {text}
    </span>
  );
}
