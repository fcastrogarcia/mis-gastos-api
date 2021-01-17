const { makeExecutableSchema } = require("apollo-server-express");
const schema = require("./schema");

module.exports = makeExecutableSchema({
  typeDefs: [schema],
  resolvers: {},
});
