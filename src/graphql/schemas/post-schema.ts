import gql from "graphql-tag";

export const postTypeDefs = gql`
  type Comment {
    id: ID!
    postId: ID!
    username: String!
    imageUrl: String!
    text: String!
    userId: ID!
  }
  type Post {
    id: ID!
    userId: ID!
    username: String!
    userImage: String!
    description: String!
    latitude: String
    longitude: String
    imageUrl: String!
    type: String!
    comments: [Comment]
  }

  input PostCreateInput {
    userId: String!
    description: String!
    latitude: String
    longitude: String
    imageUrl: String!
    username: String!
    userImage: String!
    type: String!
  }

  input CommentCreateInput {
    postId: ID!
    text: String!
    username: String!
    imageUrl: String!
    userId: String!
  }

  type Query {
    getPosts: [Post!]!
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(input: PostCreateInput!): Post!
    deletePost(id: ID!): Post
    updatePost(id: ID!, input: PostCreateInput!): Post
    createComment(input: CommentCreateInput!): Comment
    deleteComment(id: ID!): Comment
  }
`;
