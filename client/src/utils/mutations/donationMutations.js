import { gql } from "@apollo/client";

export const ADD_DONATION = gql`
  mutation addDonation(
    $username: String!
    $charity_name: String!
    $amount: Int!
  ) {
    addDonation(
      username: $username
      charity_name: $charity_name
      amount: $amount
    ) {
      _id
      username
      donations {
        _id
        charity_name
        amount
      }
    }
  }
`;
