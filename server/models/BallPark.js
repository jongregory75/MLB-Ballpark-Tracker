const { Schema, model } = require("mongoose");

const ballParkSchema = new Schema({
  phone_number: {
    type: String,
  },
  venue_name: {
    type: String,
  },
  franchise_code: {
    type: String,
  },
  city: {
    type: String,
  },
  name_display_full: {
    type: String,
  },
  address_province: {
    type: String,
  },
  name_abbrev: {
    type: String,
  },
  league: {
    type: String,
  },
  base_url: {
    type: String,
  },
  address_zip: {
    type: String,
  },
  address_line1: {
    type: String,
  },
  address_line2: {
    type: String,
  },
  address_line3: {
    type: String,
  },
  division_abbrev: {
    type: String,
  },
  state: {
    type: String,
  },
  website_url: {
    type: String,
  },
  first_year_of_play: {
    type: String,
  },
  name_display_long: {
    type: String,
  },
  store_url: {
    type: String,
  },
  address_state: {
    type: String,
  },
  division_full: {
    type: String,
  },
  address: {
    type: String,
  },
  venue_short: {
    type: String,
  },
});

const BallPark = model("BallPark", ballParkSchema);

module.exports = BallPark;
