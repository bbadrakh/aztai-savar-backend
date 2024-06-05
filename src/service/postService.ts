import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";

export const getPosts = async () => {
  try {
    const result = await prisma.post.findMany({
      include: { comments: true },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getPost = async (id: string) => {
  try {
    const result = await prisma.post.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Error fetching user");
  }
};

export const createPost = async (input: {
  description: string;
  cord: string;
  imageUrl: string;
  comments: any;
  userId: string;
  username: string;
  userImage: string;
  longitude: string;
  latitude: string;
  type: string;
}) => {
  try {
    const result = await prisma.post.create({ data: input });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Failed to create post");
  }
};

export const deletePost = async (id: string) => {
  try {
    const result = await prisma.post.delete({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Failed to delete post");
  }
};

export const updatePost = async (id: string, input: Prisma.PostUpdateInput) => {
  try {
    const result = await prisma.post.update({
      where: { id },
      data: input,
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Failed to update post");
  }
};

export const createComment = async (input: { postId: string; text: string; username: string; imageUrl: string; userId: string }) => {
  const { text, postId, username, imageUrl, userId } = input;
  try {
    const result = await prisma.comment.create({
      data: {
        text,
        username,
        imageUrl,
        userId,
        post: {
          connect: { id: postId },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Failed to create comment");
  }
};

export const deleteComment = async (id: string) => {
  try {
    const result = await prisma.comment.delete({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("Failed to delete comment");
  }
};
