import { getPost, getPosts } from "@/service/postService";

export const postQueries = {
  getPosts: () => getPosts(),
  getPost: (_: unknown, { id }: { id: string }) => getPost(id),
};
