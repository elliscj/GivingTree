const { AuthenticationError } = require("apollo-server-express");
const { User, Donation } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("donations");
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate("donations");
    },
    donations: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Donation.find(params).sort({ createdAt: -1 });
    },
    donation: async (parent, { donationId }) => {
      return await Donation.findOne({ _id: donationId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate(
          "donations"
        );
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
    addFavorite: async (
      parent,
      { charity_name: nameWeCanWorkWith },
      context
    ) => {
      if (context.user) {
        const userCheck = await User.findById(context.user._id);
        // console.log(favoritesCheck.favorites);
        const favoritesCheck = userCheck.favorites.find(({ charity_name }) => {
          return charity_name === nameWeCanWorkWith;
        });

        if (favoritesCheck) {
          throw new AuthenticationError(
            `This charity is alredy blooming on your branch!`
          );
        }
        console.log(favoritesCheck);
        const usersNewFavorite = await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $addToSet: {
              favorites: { charity_name: nameWeCanWorkWith },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return usersNewFavorite;
      }
      throw new AuthenticationError(`Our branches must be crossed!
      You must be logged in to add a favorite charity!`);
    },
    addDonation: async (parent, { charity_name, amount }, context) => {
      console.log(context.user);
      if (context.user) {
        const donation = await Donation.create({
          username: context.user.username,
          charity_name,
          amount,
        });

        const newUserDonation = await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          { $addToSet: { donations: donation._id } },
          { new: true }
        ).populate("donations");
        return newUserDonation;
      }
      throw new AuthenticationError(
        "Our branches must be crossed! You must be logged in to add a donation!"
      );
    },
    removeFavorite: async (parent, { charity_name }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
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

module.exports = resolvers;
