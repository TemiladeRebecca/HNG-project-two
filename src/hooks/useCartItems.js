// 'use client'

// import { useEffect, useState } from 'react';
// import { useProductContext } from '../context/ProductContext';
// import { fetchProductItem } from '../pages/handleFetchData';

// export default function useCartItems(ProductIds) {
//   const { products } = useProductContext();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (!ProductIds || ProductIds.length === 0) {
//       setCartItems([]);
//       return;
//     }

//     const fetchCartItems = async () => {
//       try {
//         const filteredProducts = await Promise.all(ProductIds.map(id => fetchProductItem(id)));
//         const cartData = filteredProducts.map(productItem => ({
//           image: productItem.photos.length > 0 ? productItem.photos[0].url : '/default-image.jpg',
//           // price: productItem.current_price ? productItem.current_price[0].NGN[0] : null,
//           id: productItem.id,
//           slug: productItem.url_slug,
//         }));
//         setCartItems(cartData);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [ProductIds, products]);

//   return cartItems;
// }
