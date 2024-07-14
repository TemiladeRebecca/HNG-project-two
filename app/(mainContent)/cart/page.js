'use client'

import { useEffect, useState } from 'react';
import { useProductContext } from '@/src/context/ProductContext';
import  fetchProductItem from '@/src/pages/handleFetchProduct';
import Link from 'next/link';
import Image from 'next/image';

export default function useCartItems(ProductIds) {
  const { products } = useProductContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!ProductIds || ProductIds.length === 0) {
      setCartItems([]);
      return;
    }
    
    const fetchCartItems = async () => {
      try {
        const filteredProducts = await fetchProductItem(ProductIds);
        
        // console.log(filteredProducts);

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
  }, [ProductIds, products]);

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

