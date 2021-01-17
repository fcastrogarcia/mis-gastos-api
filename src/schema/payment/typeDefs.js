const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Payment {
    id: ID!
    period: Int!
    user: User!
  }
`;

module.exports = typeDefs;
