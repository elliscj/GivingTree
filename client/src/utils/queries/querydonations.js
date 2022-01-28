import { gql } from "@apollo/client";

export const QUERY_DONATIONS = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;
