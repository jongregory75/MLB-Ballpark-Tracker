import { gql } from "@apollo/client";

export const DIVISION = gql`
  query division($division_abbrev: String!) {
    division(division_abbrev: $division_abbrev) {
      name_display_long
      venue_name
      address_line1
      address_city
      address_state
      address_zip
      phone_number
      website_url
      division_abbrev
    }
  }
`;

export const QUERY_BALLPARKS = gql`
  query ballparks {
    ballparks {
      phone_number
      city
    }
  }
`;

export const QUERY_PROFILES = gql`
  query ballparks {
    ballparks {
      phone_number
      city
    }
  }
`;

export const INSIDEPARKINFO = gql`
  query insideparkinfo($franchise_code: String!) {
    insideparkinfo(franchise_code: $franchise_code) {
      franchise_code
      menu_1
      menu_2
      menu_3
    }
  }
`;

export const BALLPARKBYID = gql`
  query ballparkbyid($franchise_code: String!) {
    ballparkbyid(franchise_code: $franchise_code) {
      franchise_code
      name_display_long
      venue_name
      address_line1
      address_city
      address_state
      address_zip
      phone_number
      website_url
      division_abbrev
    }
  }
`;

export const BARINFO = gql`
  query barinfo($franchise_code: String!) {
    barinfo(franchise_code: $franchise_code) {
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
  }
`;
