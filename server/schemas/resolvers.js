const { BallPark, BarInfo } = require("../models");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");
//TODO Build out resolvers.  This code is currently boilerplate from the MERN Miniproject codebase

const resolvers = {
  Query: {
    ballparks: async () => {
      return BallPark.find({});
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
    },
  },
};
module.exports = resolvers;
