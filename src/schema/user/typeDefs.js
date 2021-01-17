const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    profilePicture: String!
    payments: [Payment!]!
    expenses: [Expense!]!
  }
`;

module.exports = typeDefs;
