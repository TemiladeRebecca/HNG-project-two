'use client';

import { useProductContext } from '@/src/context/ProductContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function useCartItems({ ProductIds }) {
  const { products } = useProductContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!ProductIds || ProductIds.length === 0) {
      setCartItems([]);
      return;
    }

    const filteredProducts = products.filter(product => ProductIds.includes(product.id));
    const cartData = filteredProducts.map(productItem => ({
      image: productItem.photos.length > 0 ? productItem.photos[0].url : '/default-image.jpg',
      price: productItem.current_price ? productItem.current_price[0].AUD[0] : null,
      id: productItem.id,
      slug: productItem.url_slug,
    }));

    setCartItems(cartData);
  }, [ProductIds, products]);

  return (
    <div>
      {cartItems.length > 0 ? (
        <ul className="cartContainer">
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={`https://api.timbu.cloud/images/${item.image}`} alt={item.slug} />
              <p>{item.price ? `Price: ${item.price}` : 'Price not available'}</p>
              <p>
                <Link className="checkout-link" href="/checkout">Make Order</Link>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className='cartEmpty'>
          <h2>No Item in the Cart</h2>
          <Link href="/products" className='cartLink'>Order Now</Link>
        </div>
      )}
    </div>
  );
}
