import Link from 'next/link';
import Image from 'next/image';

export default function CheckOut() {
    return <div className="checkout">
        <Link href='/'>
            <div className='checkout-header'>
            <Image  
            src='/images/checkout/CheckHeader.jpg' 
            alt='checkout'
            fill
            priority/>
            </div>
            
        </Link>
        <div className='checkout-body'>
        <Image 
        src='/images/checkout/Checkout.jpg' alt='checkout'
        fill
        priority />
        </div>
        
    </div>
}
