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
      venue_image
    }
  }
`;

export const INSIDEPARK = gql`
  query insidepark($franchise_code: String!) {
    insidepark(franchise_code: $franchise_code) {
      franchise_code
      name_display_long
      menu_1
      menu_1_loc_name
      menu_1_loc_section
      menu_1_image
      menu_2
      menu_2_loc_name
      menu_2_loc_section
      menu_2_image
      menu_3
      menu_3_loc_name
      menu_3_loc_section
      menu_3_image
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
      phone_number
      city
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
      venue_image
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
