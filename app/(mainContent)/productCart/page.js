'use client'

import { useCart } from "@/src/context/ProductContext";
import Image from 'next/image';
import Link from 'next/link';

export default function CartContainer() {
    
    const { cartItems } = useCart();

    return(
        <>
            {cartItems ? (cartItems.map((item) => (
        <ul>
            <li>
                <article>
                    <header>
                        <div>
                            <Image
                                src={ `https://api.timbu.cloud/images/${item.cartItemImage}`}
                                alt={item.cartItemSlug}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                            </div>
                            <p>{item.cartItemPrice}</p>
                            <p>{item.description}</p>
                            </header>
      
                        </article>
                    </li>
                </ul>
                    ))) : (
                <div className="cartEmpty">
                    <h2>Your Cart is Empty</h2>
                    <Link className='cartLink' href='/products'>Start Shopping</Link>
                </div>
            )}
        </>
    );
}