const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users(query: String): [User!]!
    posts(keyword: String): [Post!]!
    comments: [Comment!]!
    me: User!
    post: Post!
    expenseTest: String
    paymentTest: String
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    deleteUser(id: ID!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    createPost(data: CreatePostInput): Post!
    updatePost(id: ID!, data: UpdatePostInput): Post!
    createComment(data: CreateCommentInput): Comment!
    updateComment(id: ID!, data: UpdateCommentInput!): Comment!
    deletePost(id: ID!): Post!
    deleteComment(id: ID!): Comment!
  }

  type Subscription {
    count: Int!
    comment(postId: ID!): CommentSubscriptionPayload!
    post: PostSubscriptionPayload!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  input UpdateUserInput {
    name: String
    email: String
    age: Int
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }

  input UpdatePostInput {
    title: String
    body: String
    published: Boolean
  }

  input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
  }

  input UpdateCommentInput {
    text: String
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    data: Post!
  }

  type CommentSubscriptionPayload {
    mutation: MutationType!
    data: Comment!
  }
`;

module.exports = { typeDefs };
