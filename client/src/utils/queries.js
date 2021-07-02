import { gql } from "@apollo/client";

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
