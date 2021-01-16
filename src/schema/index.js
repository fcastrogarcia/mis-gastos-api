const { makeExecutableSchema } = require("apollo-server-express");
const schema = require("./schema");
// test
const User = require("./user");

const resolveSchemas = () => {
  return {
    typeDefs: [],
    resolvers: {},
  };
};

module.exports = makeExecutableSchema({
  typeDefs: [schema, User.typeDefs],
  resolvers: { ...User.resolvers },
});
