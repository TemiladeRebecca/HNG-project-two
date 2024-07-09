import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/ImageSlide.js";

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Lux Chairs</h1>
            <p>Discover stylish and comfortable chair furniture for your home or office at Lux Chairs.</p>
            <p>
              <Link href="/products">View Products</Link>
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Discover Stylish Chair Furniture</h2>
          <p>
          Explore our collection of high-quality chairs designed for comfort and elegance 
          </p>
          <p>
            <Link href="/products">Shop now</Link>
          </p>

          <h2 className={classes.testimonials}>What our customers say</h2>
          <div className={classes.testimonial}>
            <blockquote>
              &ldquo;These chairs are amazing! Comfortable, stylish, and perfect for my home office.&rdquo;
           </blockquote>
          <p>- Emily D.</p>
        </div>
        <div className={classes.testimonial}>
          <blockquote>
          &ldquo;I love the modern design of my new dining chairs. They exceeded my expectations!&rdquo;
        </blockquote>
       <p>- Mark S.</p>
      </div>

        </section>
      </main>
    </>
  );
}