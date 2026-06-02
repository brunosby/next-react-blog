import { Container } from "@/components/Container.index";
import Header from "@/components/Header";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            priority
            className="group-hover:scale-105 transition duration-300 w-full h-full object-cover object-center"
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            dateTime="2026-06-01"
            className="text-slate-600 text-sm/tight block"
          >
            2026/06/01 10:00
          </time>

          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Título do post</Link>
          </h1>

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
