import { Container } from "@/components/Container.index";
import Header from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "/post/1" }}
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

          <PostHeading url="#" as="h1">
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

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
