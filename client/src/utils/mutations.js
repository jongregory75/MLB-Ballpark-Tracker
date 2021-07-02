import { gql } from "@apollo/client";

export const SAVE_VISITED = gql`
  mutation saveVisited($parkId: ID!) {
    saveVisited(parkId: $parkId) {
      email
      visitedParks {
        phone_number
        city
      }
    }
  }
`;
export const SIGN_UP = gql`
 signUp(email: String!, password: String!): Auth
`;
export const SIGN_IN = gql`
 signIn(email: String!, password: String!): Auth
`;
