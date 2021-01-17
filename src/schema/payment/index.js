const typeDefs = require("./typeDefs");
const Query = require("./Query");
const Mutation = require("./Mutation");
const Subscription = require("./Subscription");
const Payment = require("./Payment");

module.exports = {
  resolvers: { Mutation, Query, Subscription, Payment },
  typeDefs,
};
