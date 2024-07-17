'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from "./productItem.module.css";
import CartContainer from '@/app/(mainContent)/productCart/page';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ProductItem({ id, name, url_slug, current_price, photos }) {
  const [cartItems, setCartItems] = useState({
    cartItemId: '',
    cartItemImage: '',
    cartItemDescription: '',
    cartItemSlug: '',
    cartItemPrice: ''
  });

  const addToCart = async (product_id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/fetchProduct/${product_id}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const product = await res.json();
      setCartItems({
        cartItemId: product.id,
        cartItemImage: product.photos.length > 0 ? product.photos[0].url : '',
        cartItemDescription: product.description,
        cartItemSlug: product.url_slug,
        // cartItemPrice: product.current_price[0].NGN[0]
      });
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const imageUrl = photos.length > 0 ? `https://api.timbu.cloud/images/${photos[0].url}` : '/default-image.jpg';

  return (
    <>
      <article className={classes.product}>
        <header>
          <div className={classes.image}>
            <Link href={`/archive/${url_slug}`}>
              <Image
                src={imageUrl}
                alt={url_slug}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </Link>
          </div>
          <div className={classes.headerText}>
            <h2>{name}</h2>
            <p className={classes.summary}>{current_price ? current_price[0].NGN[0] : 'Price not available'}</p>
          </div>
        </header>
        <div className={classes.content}>
          <div className={classes.actions}>
            <button type="button" onClick={() => addToCart(id)}>Add to Cart</button>
          </div>
        </div>
      </article>
      <CartContainer cartItems={cartItems} />    
    </>
  );
}
