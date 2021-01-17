const fs = require("fs");
const path = require("path");
const merge = require("merge-deep");

const accumulator = { typeDefs: [], resolvers: {} };

const isValidTypes = types => {
  return Object.keys(types).length ? [types] : [];
};

const reduceSchemas = __dirname => {
  return fs.readdirSync(__dirname).reduce((acc, curr) => {
    const { typeDefs = {}, resolvers = {} } = require(path.join(__dirname, curr));

    return {
      typeDefs: [...acc.typeDefs, ...isValidTypes(typeDefs)],
      resolvers: merge(acc.resolvers, resolvers),
    };
  }, accumulator);
};

module.exports = {
  reduceSchemas,
};
