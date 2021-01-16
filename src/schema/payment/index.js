const typeDefs = require("./typeDefs");
const Query = require("./Query");
const Mutation = require("./Mutation");
const Subscription = require("./Subscription");
const data = require("./data");

module.exports = {
  resolvers: { Mutation, Query, Subscription },
  typeDefs,
};
