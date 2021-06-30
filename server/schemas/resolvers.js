const { BallPark } = require("../models");
const { Profile } = require("../models");
const { VisitedParks } = require("../models");
const { signToken } = require("../utils/auth");
//TODO Build out resolvers.  This code is currently boilerplate from the MERN Miniproject codebase

const resolvers = {
  Query: {
    ballparks: async () => {
      return BallPark.find({});
    },
    visitedParks: async () => {
      return VisitedParks.find({});
    },
  },
  Mutation: {
    signUp: async (parent, { email, password }) => {
      const profile = await Profile.create({ email, password });
      console.log(profile);
      const token = signToken(profile);
      return { token, profile };
    },
    signIn: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }
      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};
module.exports = resolvers;
