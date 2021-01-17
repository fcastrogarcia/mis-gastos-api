const typeDefs = require("./typeDefs");
const Query = require("./Query");
const Mutation = require("./Mutation");
const Subscription = require("./Subscription");
const User = require("./User");

module.exports = {
  resolvers: { Mutation, Query, Subscription, User },
  typeDefs,
};
