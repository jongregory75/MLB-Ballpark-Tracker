const { BallPark } = require("../models");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");
//TODO Build out resolvers.  This code is currently boilerplate from the MERN Mini project codebase

const resolvers = {
  Query: {
    ballparks: async () => {
      return BallPark.find();
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
