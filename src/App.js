import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import {onError} from '@apollo/client/link';
import React, { Component } from "react";
import URI from "./utils/graphQlUri";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      return console.log(`GraphQl Error: ${message} in ${location} at ${path}`)
    });
  };
});

const link = from([
  errorLink,
  new HttpLink({ uri: URI })
]);

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : link
});

class App extends Component {
    render() {
      return (
      <ApolloProvider client={client}>
        Hello Im the App
      </ApolloProvider>
    );
  }
}

export default App;