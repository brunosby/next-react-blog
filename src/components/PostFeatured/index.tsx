import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "teste";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Título do post",
          priority: true,
        }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          dateTime="2026-06-01"
          className="text-slate-600 text-sm/tight block"
        >
          2026/06/01 10:00
        </time>

        <PostHeading url={postLink} as="h1">
          Título do post
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quae saepe consequatur nulla, cum explicabo eligendi aut ducimus
          repellendus fugiat repellat ipsum veritatis pariatur, tenetur libero
          assumenda nam consectetur voluptas.
        </p>
      </div>
    </section>
  );
}
