import { AuthenticationError } from "apollo-server-express";
import { User, Donation } from "../models";
import { signToken } from "../utils/auth";

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("donations");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("donations");
    },
    donations: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Donation.find(params).sort({ createdAt: -1 });
    },
    donation: async (parent, { donationId }) => {
      return Donation.findOne({ _id: donationId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("donations");
      }
      throw new AuthenticationError(`Our fruits haven't bloomed yet!
      You need to be signed in to view this page.`);
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
    addFavorite: async (parent, { userId, charity_name }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          {
            _id: userId,
          },
          {
            $addToSet: {
              favorites: { charity_name },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError(`Our branches must be crossed!
      You must be logged in to add a favorite charity!`);
    },
    addDonation: async (parent, { charity_name, amount }, context) => {
      if (context.user) {
        const donation = await Donation.create({
          username: context.user.username,
          charity_name,
          amount,
        });

        await User.findOneAndUpdate(
          {
            id: context.user._id,
          },
          { $addToSet: { donations: donation._id } }
        );
      }
    },
    removeFavorite: async (parent, { userId, charity_name }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { id: userId },
          {
            $pull: {
              favorites: {
                charity_name: charity_name,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError(`Our branches must be crossed!
      You must be logged in to remove a favorite charity!`);
    },
  },
};

export default resolvers;
