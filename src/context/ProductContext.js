'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import fetchProductsData from '../pages/handleFetchData';

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const fetchedProducts = await fetchProductsData();
        setProducts(fetchedProducts.items);
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
