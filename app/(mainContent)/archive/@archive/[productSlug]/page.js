import {notFound} from 'next/navigation';
import Link from 'next/link';
import { PRODUCTS_LIST } from "@/PRODUCTS";


export default function ProductDetailPage({params}) {
    const productSlug = params.productSlug;
    const selectedProduct = PRODUCTS_LIST.find(productItem => productItem.slug === productSlug);

    if (!selectedProduct) {
        notFound();
    }

    return (
        <>
          <header className="header">
            <div className="image-container">
              <Link href="/checkout">
              <img className="image" src={`/images/product-description/${selectedProduct.description}`} alt={selectedProduct.slug} />
              </Link>
            </div>
          </header>
    </>
    );
}