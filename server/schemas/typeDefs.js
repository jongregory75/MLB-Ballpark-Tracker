const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    profileId: ID
    email: String!
    password: String!
    visitedParks: [BallPark]
  }

  type InsideParkInfo {
    franchise_code: String
    menu_1: String
    menu_2: String
    menu_3: String
  }
  
  type BarInfo =  {
    franchise_code: String
    venue_name_1: String
    venue_add_1: String
    venue_rating_1: Number
    venue_name_2: String
    venue_add_2: String
    venue_rating_2: Number
    venue_name_3: String
    venue_add_3: String
    venue_rating_3: Number
  }

  type BallPark {
    _id: ID!
    phone_number: String
    venue_name: String
    franchise_code: String
    all_star_sw: String
    sport_code: String
    address_city: String
    city: String
    name_display_full: String
    spring_league_abbrev: String
    time_zone_alt: String
    sport_id: String
    venue_id: String
    mlb_org_id: String
    time_zone_generic: String
    mlb_org: String
    last_year_of_play: String
    league_full: String
    home_opener_time: String
    address_province: String
    league_id: String
    name_abbrev: String
    bis_team_code: String
    league: String
    spring_league: String
    base_url: String
    address_zip: String
    sport_code_display: String
    mlb_org_short: String
    time_zone: String
    address_line1: String
    mlb_org_brief: String
    address_line2: String
    season: String
    address_line3: String
    division_abbrev: String
    name_display_short: String
    team_id: String
    active_sw: String
    address_intl: String
    state: String
    address_country: String
    mlb_org_abbrev: String
    division: String
    team_code: String
    name: String
    website_url: String
    sport_code_name: String
    first_year_of_play: String
    league_abbrev: String
    name_display_long: String
    store_url: String
    time_zone_text: String
    name_short: String
    home_opener: String
    address_state: String
    division_full: String
    time_zone_num: String
    spring_league_full: String
    address: String
    name_display_brief: String
    file_code: String
    division_id: String
    spring_league_id: String
    venue_short: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  type Query {
    profiles: [Profile]
    ballparks: [BallPark]
    division(division_abbrev: String!): [BallPark]
    ballparkbyid(franchise_code: String!): [BallPark]
    insideparkinfo(franchise_code: String!): [InsideParkInfo]
    barinfo(franchise_code: String!): [BarInfo]
  }
  type Mutation {
    saveVisited(parkId: ID!): Profile
    signUp(email: String!, password: String!): Auth
    signIn(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// type BallPark {
//     _id: ID!
//     phone_number: String
//     venue_name: String
//     franchise_code: String
//     all_star_sw: String
//     sport_code: String
//     address_city: String
//     city: String
//     name_display_full: String
//     spring_league_abbrev: String
//     time_zone_alt: String
//     sport_id: String
//     venue_id: String
//     mlb_org_id: String
//     time_zone_generic: String
//     mlb_org: String
//     last_year_of_play: String
//     league_full: String
//     home_opener_time: String
//     address_province: String
//     league_id: String
//     name_abbrev: String
//     bis_team_code: String
//     league: String
//     spring_league: String
//     base_url: String
//     address_zip: String
//     sport_code_display: String
//     mlb_org_short: String
//     time_zone: String
//     address_line1: String
//     mlb_org_brief: String
//     address_line2: String
//     season: String
//     address_line3: String
//     division_abbrev: String
//     name_display_short: String
//     team_id: String
//     active_sw: String
//     address_intl: String
//     state: String
//     address_country: String
//     mlb_org_abbrev: String
//     division: String
//     team_code: String
//     name: String
//     website_url: String
//     sport_code_name: String
//     first_year_of_play: String
//     league_abbrev: String
//     name_display_long: String
//     store_url: String
//     time_zone_text: String
//     name_short: String
//     home_opener: String
//     address_state: String
//     division_full: String
//     time_zone_num: String
//     spring_league_full: String
//     address: String
//     name_display_brief: String
//     file_code: String
//     division_id: String
//     spring_league_id: String
//     venue_short: String
//   }
