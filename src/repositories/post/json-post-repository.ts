import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

const SIMULATED_DELAY_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateDelay() {
    if (SIMULATED_DELAY_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    await this.simulateDelay();

    const fileContent = await readFile(POSTS_FILE_PATH, "utf-8");
    const data = JSON.parse(fileContent);
    const { posts } = data;
    return posts as PostModel[];
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();

    console.log("\n", "findAllPublic", "\n");

    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error(`Post com id ${id} não encontrado`);

    return post;
  }
  async findBySlug(slug: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error(`Post com slug ${slug} não encontrado`);

    return post;
  }
}

// (async () => {
//   //   const posts = await postRepository.findAll();
//   //   posts.forEach((post) => {
//   //     console.log(post.id);
//   //   });

//   const post = await postRepository.findById(
//     "99f8add4-7684-4c16-a316-616271db199e",
//   );
//   console.log(post);
// })();
