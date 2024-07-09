import Image from 'next/image';
import Link from 'next/link';
import classes from "./productItem.module.css"


export default function ProductItem ({slug, image}) {
    return <article className={classes.product}>
    <header>
      <div className={classes.image}>
        <Link href={`/archive/${slug}`}>
          <Image src={`/images/products/${image}`} alt={slug} fill />
        </Link> 
      </div>
    </header>

      <div className={classes.actions}>
        <Link href={`/cart/${slug}`}>Add to Cart</Link>
      </div>
  </article>
}