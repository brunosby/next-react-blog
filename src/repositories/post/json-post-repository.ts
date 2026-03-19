import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

const SIMULATED_DELAY_MS = 5000;

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

  async findAll(): Promise<PostModel[]> {
    return this.readFromDisk();
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error(`Post with id ${id} not found`);

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
