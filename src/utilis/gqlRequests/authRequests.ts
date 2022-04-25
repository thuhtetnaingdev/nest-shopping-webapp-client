import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $dateOfBirth: String!
    $email: String!
    $gender: String!
    $password: String!
    $confirmPassword: String!
    $phone: String!
    $username: String!
  ) {
    register(
      createAuthInput: {
        firstName: $firstName
        lastName: $lastName
        username: $username
        email: $email
        dateOfBirth: $dateOfBirth
        gender: $gender
        password: $password
        confirmPassword: $confirmPassword
        phone: $phone
      }
    ) {
      token
      email
      username
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(loginAuthInput: { password: $password, username: $username }) {
      email
      token
      username
    }
  }
`;
