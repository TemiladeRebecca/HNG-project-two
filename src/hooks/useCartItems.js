// 'use client';

// import { useProductContext } from "../context/ProductContext";
// import {useState, useEffect} from 'react';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export default function useCartItems(product_id) {
//   const { products } = useProductContext();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (!product_id || product_id.length === 0) {
//       setCartItems([]);
//       return;
//     }

//     const id = Array.isArray(product_id) ? product_id[0] : product_id;
  
    
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/api/fetchProduct/${id}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const getProducts = await response.json();
        
//         const filteredProducts = getProducts;
//         const cartData = {
//           image: filteredProducts.photos.length > 0 ? filteredProducts.photos[0].url : '/default-image.jpg',
//           price: filteredProducts.current_price ? filteredProducts.current_price : null,
//           id: filteredProducts.id,
//           slug: filteredProducts.url_slug,
//         };
//         setCartItems([cartData]);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [product_id, products]);

//   return cartItems;
// }