import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps?: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      href={linkProps?.href || "#"}
      className={clsx(
        "w-full h-full overflow-hidden rounded-xl",
        linkProps?.className,
      )}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt || "Post cover image"}
        className={clsx(
          "group-hover:scale-105 transition duration-300 w-full h-full object-cover object-center",
          imageProps.className,
        )}
      />
    </Link>
  );
}
