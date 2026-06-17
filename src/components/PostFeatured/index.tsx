import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

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

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt="2024-06-01T12:00:00Z"
        title="Título do post em destaque"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Sed at nunc ac nisl efficitur efficitur."
      />
    </section>
  );
}
