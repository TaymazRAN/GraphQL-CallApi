import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import ProductList from "./ProductList";

const client = new ApolloClient({
  uri: "https://www.fakestoreapi.com/graphql", // GraphQL API endpoint
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ProductList />
      </div>
    </ApolloProvider>
  );
}

export default App;
