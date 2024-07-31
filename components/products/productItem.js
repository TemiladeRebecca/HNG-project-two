'use client';

import { useCart } from '@/src/context/ProductContext';
import Image from 'next/image';
import Link from 'next/link';
import classes from "./productItem.module.css";


export default function ProductItem({ id, name, url_slug, current_price, photos }) {
  const { addToCart } = useCart();

  const handleAddToCart = async (product_id) => {
    await addToCart(product_id);
  };

  const imageUrl = photos.length > 0 ? `https://api.timbu.cloud/images/${photos[0].url}` : '/default-image.jpg';

  return (
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
          <button type="button" onClick={() => handleAddToCart(id)}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}
