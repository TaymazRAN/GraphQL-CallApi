import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($category: String!) {
    products(category: $category) {
      id
      title
      price
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
  query AllProducts {
    products {
      id
      title
      price
    }
  }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category: "jewelery" }, // Replace with the desired category
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
