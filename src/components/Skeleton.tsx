import { Fragment } from "react";
import { j } from "../libs/utils";

// XXX: this is a bit of a mess, but it works

interface CircleSkeletonProps {
  circle: true;
  size: number;
}

interface BasicTextSkeletonProps {
  circle?: never;
  textClass:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl";
}

interface LinesTextSkeletonProps extends BasicTextSkeletonProps {
  lines: number;
}

interface CharactersTextSkeletonProps extends BasicTextSkeletonProps {
  characters: number;
}

type TextSkeletonProps = LinesTextSkeletonProps | CharactersTextSkeletonProps;

interface ProportionalSkeletonProps
  extends Omit<LinesTextSkeletonProps, "lines"> {
  proportion: number;
}

type BasicSkeletonProps =
  | CircleSkeletonProps
  | ProportionalSkeletonProps
  | CharactersTextSkeletonProps;

type SkeletonProps = TextSkeletonProps | CircleSkeletonProps;

export function Skeleton(props: SkeletonProps) {
  if (props.circle) {
    return <BasicSkeleton circle size={props.size} />;
  }

  if ("characters" in props) {
    return <BasicSkeleton {...props} />;
  }

  const Tag = "count" in props && props.lines <= 1 ? Fragment : "span";

  const countFloor = Math.floor(props.lines ?? 1);
  const remainder = (props.lines ?? 1) - countFloor;

  return (
    <Tag {...(Tag === "span" ? { className: "flex flex-col w-full" } : {})}>
      {Array(countFloor ?? 1)
        .fill(0)
        .map((_, index) => (
          <BasicSkeleton
            textClass={props.textClass}
            key={index}
            proportion={1}
          />
        ))}
      {remainder > 0 && (
        <BasicSkeleton textClass={props.textClass} proportion={remainder} />
      )}
    </Tag>
  );
}

function BasicSkeleton(props: BasicSkeletonProps) {
  // XXX: maybe we can do this better with resolveConfig from tailwindcss

  const ADJUSTMENT = 0.5;

  const DEFAULT_LINE_HEIGHTS: {
    [key in TextSkeletonProps["textClass"]]: number;
  } = {
    "text-xs": 1,
    "text-sm": 1.25,
    "text-base": 1.5,
    "text-lg": 1.75,
    "text-xl": 1.75,
    "text-2xl": 2,
    "text-3xl": 2.25,
    "text-4xl": 2.5,
  };

  const lineHeight = props.circle
    ? undefined
    : DEFAULT_LINE_HEIGHTS[props.textClass] - ADJUSTMENT;

  return (
    <span
      className={j(
        "select-none bg-base-900/15 motion-safe:animate-pulse dark:bg-base-dark-100/15",
        props.circle
          ? "flex flex-none rounded-full"
          : j(
              "my-1 inline-flex rounded-md",
              "proportion" in props && props.proportion === 1 ? "w-full" : "",
            ),
      )}
      style={{
        ...(props.circle
          ? { width: `${props.size}rem`, height: `${props.size}rem` }
          : {
              lineHeight: `${lineHeight}rem`,
              ...("proportion" in props && props.proportion !== 1
                ? { width: `${props.proportion * 100}%` }
                : {}),
              ...("characters" in props
                ? { width: `${props.characters}ch` }
                : {}),
            }),
      }}
    >
      <br />
    </span>
  );
}
