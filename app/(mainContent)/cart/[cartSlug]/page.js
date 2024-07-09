import Link from 'next/link';
import { PRODUCTS_LIST } from "@/PRODUCTS";

export default function DisplayCart({params}) {
    const selectedCart = params.cartSlug;

    const selectedItem = PRODUCTS_LIST.find(productItem => productItem.slug === selectedCart);
    
    return(
        <>
            <div className="cart-container">
              <img className="cart-image" src={`/images/cart-overlay/${selectedItem.quantity}`} alt={selectedItem.slug} />
              <p>
                <Link className='checkout-link' href="/checkout">Make Order</Link>
              </p>
            </div>
    </>
    );
}
