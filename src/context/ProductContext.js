'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        fetch(`${API_BASE_URL}/api/fetchProducts`)
          .then((res) => res.json())
          .then(data => setProducts(data.items))
          .catch(error => console.error('Error fetching data:', error));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    // This will log the products state whenever it updates
    // console.log(products);
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
