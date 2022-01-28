import { gql } from "@apollo/client";

export const QUERY_CATEGORIES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;
