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
