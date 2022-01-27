import { AuthenticationError } from "apollo-server-express";
import { User } from "../models";
import { signToken } from "../utils/auth";

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(`Must be a disconnected branch!
          No user found with that email address!`);
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError(`Our roots go deep, but not that deep!
          Incorrect email or password!`);
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

export default resolvers;
