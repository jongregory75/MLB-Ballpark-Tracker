const { Schema } = require("mongoose");

const parkDataSchema = new Schema({
  phone_number: {
    type: String,
  },
  venue_name: {
    type: String,
  },
  franchise_code: {
    type: String,
  },
  all_star_sw: {
    type: String,
  },
  sport_code: {
    type: String,
  },
  address_city: {
    type: String,
  },
  city: {
    type: String,
  },
  name_display_full: {
    type: String,
  },
  time_zone_alt: {
    type: String,
  },
  venue_id: {
    type: String,
  },
  mlb_org_id: {
    type: String,
  },
  time_zone_generic: {
    type: String,
  },
  mlb_org: {
    type: String,
  },
  last_year_of_play: {
    type: String,
  },
  league_full: {
    type: String,
  },
  home_opener_time: {
    type: String,
  },
  address_province: {
    type: String,
  },
  league_id: {
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
  mlb_org_short: {
    type: String,
  },
  address_line1: {
    type: String,
  },
  mlb_org_brief: {
    type: String,
  },
  address_line2: {
    type: String,
  },
  season: {
    type: String,
  },
  address_line3: {
    type: String,
  },
  division_abbrev: {
    type: String,
  },
  name_display_short: {
    type: String,
  },
  team_id: {
    type: String,
  },
  state: {
    type: String,
  },
  mlb_org_abbrev: {
    type: String,
  },
  division: {
    type: String,
  },
  team_code: {
    type: String,
  },
  name: {
    type: String,
  },
  website_url: {
    type: String,
  },
  first_year_of_play: {
    type: String,
  },
  league_abbrev: {
    type: String,
  },
  name_display_long: {
    type: String,
  },
  store_url: {
    type: String,
  },
  name_short: {
    type: String,
  },
  address_state: {
    type: String,
  },
  division_full: {
    type: String,
  },
  spring_league_full: {
    type: String,
  },
  address: {
    type: String,
  },
  name_display_brief: {
    type: String,
  },
  file_code: {
    type: String,
  },
  division_id: {
    type: String,
  },
  venue_short: {
    type: String,
  },
});

module.exports = parkDataSchema;
