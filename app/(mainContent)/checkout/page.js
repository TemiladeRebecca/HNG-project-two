import Link from 'next/link'

export default function CheckOut() {
    return <div className="checkout">
        <Link href='/'>
            <img className='checkout-header' src='/images/checkout/CheckHeader.jpg' alt='checkout'/>
        </Link>
        
        <img className='checkout-body' src='/images/checkout/Checkout.jpg' alt='checkout'/>
    </div>
}
