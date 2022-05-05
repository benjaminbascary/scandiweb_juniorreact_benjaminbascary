import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
{
  currencies {
    symbol
  }
  categories {
    name
    products {
      description
      attributes{
        name
        items{
          value
        }
      }
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

export const LOAD_CURRENCIES = gql`
{
  currencies {
    symbol
  }
}
`