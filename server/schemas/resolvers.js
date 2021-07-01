const { BallPark } = require("../models");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    ballparks: async () => {
      return await BallPark.find();
    },
    profiles: async () => {
      return await Profile.find().populate("visitedParks");
    },
    queryNLW: async (parent, { division_abbrev }) => {
      return await BallPark.find().populate("ballparks");
    },
  },
  Mutation: {
    signUp: async (parent, { email, password }) => {
      const profile = await Profile.create({ email, password });
      console.log(profile);
      const token = signToken(profile);
      return { token, profile };
    },
    saveVisited: async (
      parent,
      { phone_number, venue_name, franchise_code },
      context
    ) => {
      console.log(phone_number, venue_name, franchise_code, context.user._id);
      if (context.user) {
        const profile = await Profile.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              savedVisited: {
                phone_number,
                venue_name,
                franchise_code,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        console.log(profile);
        return profile;
      } else {
        throw new AuthenticationError("You need to be logged in!");
      }
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

// visitedParks: async () => {
//       return VisitedParks.find({});
//     },
