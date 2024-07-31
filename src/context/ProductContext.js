'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/fetchProducts`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const addToCart = async (product_id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/fetchProduct/${product_id}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const product = await res.json();
      const newCartItem = {
        cartItemId: product.id,
        cartItemImage: product.photos.length > 0 ? product.photos[0].url : '',
        cartItemDescription: product.description,
        cartItemSlug: product.url_slug,
        // cartItemPrice: product.current_price[0].NGN[0]
      };
      setCartItems((prevItems) => [...prevItems, newCartItem]);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  useEffect(() => {
    // Optional: Log products state changes
    // console.log(products);
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, cartItems, loading, error, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
export const useCart = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a ProductProvider');
  }
  return {
    cartItems: context.cartItems,
    addToCart: context.addToCart,
  };
};

