import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children?: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: HeadingTag = "h2",
}: PostHeadingProps) {
  const commonClasses = "font-extrabold";

  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl",
    h2: "text-xl/tight sm:text-2xl",
  };

  return (
    <HeadingTag className={clsx(commonClasses, headingClassesMap[HeadingTag])}>
      <Link href={url}>{children}</Link>
    </HeadingTag>
  );
}
