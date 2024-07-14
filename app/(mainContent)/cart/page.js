'use client'

import { useEffect, useState } from 'react';
import { useProductContext } from '@/src/context/ProductContext';
import Link from 'next/link';
import Image from 'next/image';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function useCartItems(product_id) {
  const { products } = useProductContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!product_id || product_id.length === 0) {
      setCartItems([]);
      return;
    }
    
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/fetchProduct/${product_id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const getProducts = await response.json();

        if (!getProducts || !getProducts.items) {
          console.error('Invalid product data:', getProducts);
          setCartItems([]);
          return;
        }
        
        const filteredProducts = getProducts.items;
        const cartData = {
          image: filteredProducts.photos.length > 0 ? filteredProducts.photos[0].url : '/default-image.jpg',
          price: filteredProducts.current_price ? filteredProducts.current_price : null,
          id: filteredProducts.id,
          slug: filteredProducts.url_slug,
        };
        setCartItems([cartData]);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [product_id, products]);

  console.log(cartItems);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className='cartContainer'>
          <Image
            src={`https://api.timbu.cloud/images/${cartItems.image}`}
            alt={cartItems.slug}
            width={150} 
            height={150} 
            priority
          />
          <p>{cartItems.price ? `Price: ${item.price}` : 'Price not available'}</p>
          <p>
            <Link className='checkoutLink' href="/checkout">Make Order</Link>
          </p>
        </div>
      ) : (
        <div className='cartEmpty'>
        <h2>No Item in the Cart</h2>
        <Link href="/products" className='cartLink'>Order Now</Link>
        </div>
      )}
    </div>
  );
};

