import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
{
  categories {
    name
    products {
      inStock
      gallery
      id
      name
      brand
      inStock
      prices{
        amount
        currency{
          label
        }
      }
    }
  }
}
`