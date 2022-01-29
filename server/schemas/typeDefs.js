const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    favorites: [Favorite]
    donations: [Donation]
  }

  type Favorite {
    charity_name: String!
  }

  type Donation {
    _id: ID
    username: String!
    charity_name: String!
    amount: Int!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    donations(username: String!): [Donation]
    donation(_id: ID!): Donation
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(charity_name: String!): Favorite
    removeFavorite(favoriteId: ID!): Favorite
    addDonation(favoriteId: ID!, amount: Int): Favorite
  }
`;

// comment functionality for users between users?
// can make donations own model if queries are difficult

module.exports = typeDefs;
