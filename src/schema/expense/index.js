const typeDefs = require("./typeDefs");
const Query = require("./Query");
const Mutation = require("./Mutation");
const Subscription = require("./Subscription");
const Expense = require("./Expense");

module.exports = {
  resolvers: { Mutation, Query, Subscription, Expense },
  typeDefs,
};
