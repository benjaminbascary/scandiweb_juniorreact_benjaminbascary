import { ApolloProvider } from "@apollo/client";
import React, { Component } from "react";
import GetProducts from "./components/GetProducts/GetProducts";
import client from "./graphql/client";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GetProducts />
      </ApolloProvider>
    );
  };
};

export default App;