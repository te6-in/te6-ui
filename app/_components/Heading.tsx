interface HeaderProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ text, level }: HeaderProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className="mb-1 ml-1 text-lg font-bold text-base-800 dark:text-base-dark-200">
      {text}
    </Tag>
  );
}
