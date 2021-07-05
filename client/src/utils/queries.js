import { gql } from "@apollo/client";

export const DIVISION = gql`
  query division($division_abbrev: String!) {
    division(division_abbrev: $division_abbrev) {
      name_display_long
      venue_name
      address_line1
      city
      address_state
      address_zip
      phone_number
      website_url
      division_abbrev
      franchise_code
    }
  }
`;

export const INSIDEPARK = gql`
  query insidepark($franchise_code: String!) {
    insidepark(franchise_code: $franchise_code) {
      franchise_code
      menu_1
      menu_2
      menu_3
    }
  }
`;

export const BARINFO = gql`
  query barinfo($franchise_code: String!) {
    barinfo(franchise_code: $franchise_code) {
      franchise_code
      venue_name_1
      venue_add_1
      venue_rating_1
      venue_name_2
      venue_add_2
      venue_rating_2
      venue_name_3
      venue_add_3
      venue_rating_3
    }
  }
`;

export const QUERY_BALLPARKS = gql`
  query ballparks {
    ballparks {
      _id
      name_display_full
    }
  }
`;

export const PARKBYID = gql`
  query parkbyid($franchise_code: String!) {
    parkbyid(franchise_code: $franchise_code) {
      franchise_code
      name_display_long
      venue_name
      address_line1
      city
      address_state
      address_zip
      phone_number
      website_url
      division_abbrev
    }
  }
`;

// export const QUERY_PROFILES = gql`
//   query profiles {
//     ballparks {
//       phone_number
//       city
//     }
//   }
// `;
