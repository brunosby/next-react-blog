import notFound from "@/app/not-found";
import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch((error) => {
    console.error(`Erro ao encontrar post com slug ${slug}:`, error);
    return undefined;
  });

  if (!post) notFound();

  return post;
});
