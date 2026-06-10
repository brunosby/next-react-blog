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
  const commonClasses = "";

  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl font-extrabold",
    h2: "text-xl/tight font-bold",
  };

  return (
    <HeadingTag className={clsx(commonClasses, headingClassesMap[HeadingTag])}>
      <Link href={url} className=" group-hover:text-slate-600 transition">
        {children}
      </Link>
    </HeadingTag>
  );
}
