import { gql } from "@apollo/client";

export const QUERY_NLW = gql`
query queryNLW($division_abbrev: ID) {
  ballparks ($ballparks : "NLW"){
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

export const QUERY_NLE = gql`
query nlwList($division_abbrev: NLE) {
  ballparks ($division_abbrev: NLE){
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

export const QUERY_ALW = gql`
query nlwList($division_abbrev: NLW) {
  ballparks ($division_abbrev: NLW){
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

export const QUERY_ALC = gql`
query ballparks {
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
export const QUERY_ALE = gql`
query ballparks {
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
