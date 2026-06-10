import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col gap-4 group">
          <PostCoverImage
            linkProps={{ href: `/post/${post.slug}` }}
            imageProps={{
              width: 1200,
              height: 720,
              src: post.coverImageUrl,
              alt: post.title,
            }}
          />
          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              dateTime={post.createdAt}
              className="text-slate-600 text-sm/tight block"
            >
              {post.createdAt}
            </time>

            <PostHeading url="#" as="h2">
              {post.title}
            </PostHeading>

            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
