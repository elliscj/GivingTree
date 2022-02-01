import { gql } from "@apollo/client";

export const QUERY_USERS_DONATIONS = gql`
  query donations($username: String!) {
    donations(username: $username) {
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

export const QUERY_SINGLE_DONATION = gql`
  query donation($_id: ID!) {
    donation(_id: $_id) {
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
