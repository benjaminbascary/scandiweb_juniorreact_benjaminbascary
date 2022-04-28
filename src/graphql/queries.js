import { gql } from "@apollo/client";

const LOAD_USERS = gql`
  categories {
    name
    products {
      inStock
      gallery
      id
      name
      brand
      inStock
    }
  }
`