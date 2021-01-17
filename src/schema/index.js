const { makeExecutableSchema } = require("apollo-server-express");
const { reduceSchemas } = require("../utils");

const schema = reduceSchemas(__dirname);

module.exports = makeExecutableSchema(schema);
