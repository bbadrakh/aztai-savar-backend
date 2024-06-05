import { createPost, deletePost, updatePost, createComment, deleteComment } from "@/service/postService";

export const postMutations = {
  createPost: (
    _: unknown,
    {
      input,
    }: {
      input: {
        description: string;
        cord: string;
        imageUrl: string;
        comments: any;
        userId: string;
        username: string;
        userImage: string;
        latitude: string;
        longitude: string;
        type: string;
      };
    }
  ) => createPost(input),
  deletePost: (_: unknown, { id }: { id: string }) => deletePost(id),
  updatePost: (_: unknown, { id, input }: { id: string; input: { id: string; description: string; cord: string; imageUrl: string } }) =>
    updatePost(id, input),
  createComment: (_: unknown, { input }: { input: { postId: string; text: string; username: string; imageUrl: string; userId: string } }) =>
    createComment(input),
  deleteComment: (_: unknown, { id }: { id: string }) => deleteComment(id),
};
