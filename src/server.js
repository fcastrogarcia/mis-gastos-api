const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const port = process.env.PORT;

const app = express();
const path = "/api";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// app.use("*", jwtCheck, requireAuth, checkScope);

server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
