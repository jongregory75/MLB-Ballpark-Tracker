const { BallPark } = require("../models");
const { Profile } = require("../models");
const { BarInfo } = require("../models");
const { InsideParkInfo } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    ballparks: async () => {
      return await BallPark.find();
    },
    profiles: async () => {
      return await Profile.find().populate("visitedParks");
    },
    division: async (parent, { division_abbrev }) => {
      return await BallPark.find({ division_abbrev }).populate("ballparks");
    },
    barinfo: async (parent, { franchise_code }) => {
      return await BarInfo.find({ franchise_code }).populate("barinfo");
    },
    insideparkinfo: async (parent, { franchise_code }) => {
      return await InsideParkInfo.find({ franchise_code }).populate(
        "insideparkinfo"
      );
    },
    ballparkbyid: async (parent, { franchise_code }) => {
      return await BallPark.findOne({ franchise_code }).populate(
        "ballparkbyid"
      );
    },
  },
  Mutation: {
    signUp: async (parent, { email, password }) => {
      const profile = await Profile.create({ email, password });
      console.log(profile);
      const token = signToken(profile);
      return { token, profile };
    },
    saveVisited: async (parent, { parkId }, context) => {
      if (context.user) {
        console.log(parkId);
        const profile = await Profile.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              visitedParks: parkId,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        ).populate("visitedParks");
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

// savedVisited: {
//               phone_number,
//               venue_name,
//               franchise_code,
//               city,
//               name_display_full,
//               address_province,
//               name_abbrev,
//               league,
//               base_url,
//               address_zip,
//               address_line1,
//               address_line2,
//               address_line3,
//               division_abbrev,
//               state,
//               website_url,
//               first_year_of_play,
//               name_display_long,
//               store_url,
//               address_state,
//               division_full,
//               address,
//               venue_short,
//             },
