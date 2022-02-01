import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($_id: ID!, $charity_name: String!) {
    addFavorite(_id: $_id, charity_name: $charity_name) {
      _id
      username
      favorites {
        charity_name
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($_id: ID!, $charity_name: String!) {
    removeFavorite(_id: $_id, charity_name: $charity_name) {
      _id
      username
      favorites {
        charity_name
      }
    }
  }
`;
