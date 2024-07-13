import Image from 'next/image';
import Link from 'next/link';
import classes from "./productItem.module.css"


export default function ProductItem ({url_slug, description, current_price, photos}) {
  // const imageUrl = photos.length > 0 ? photos[0].url : '/default-image.jpg';
    return <article className={classes.product}>
    <header>
      <div className={classes.image}>
        <Link href={`/archive/${url_slug}`}>
          <Image src={`https://api.timbu.cloud/images/${photos[0].url}`} alt={url_slug} fill />
        </Link> 
      </div>
    </header>
      <div className={classes.content}>
        <p className={classes.summary}>{description}</p>
        <p>{current_price[0].AUD}</p>
      <div className={classes.actions}>
        <Link href={`/cart/${url_slug}`}>Add to Cart</Link>
      </div>
      </div>
  </article>
}