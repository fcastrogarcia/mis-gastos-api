const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schema");
const db = require("./models");

const port = process.env.PORT;

const app = express();
const path = "/api";

const server = new ApolloServer({
  schema,
  context: {
    db,
  },
});

// app.use("*", jwtCheck, requireAuth, checkScope);

server.applyMiddleware({ app, path });

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
