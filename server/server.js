const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const axios = require("axios");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/api/questions/:city/:state/:category", (req, res) => {
  const city = req.params.city;
  const state = req.params.state;
  const category = req.params.category;
  axios
    .get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=1f111d45&app_key=45644615277bb0eaacf2e9e76d6fb930&state=${state}&city=${city}&categoryID=${category}`
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
