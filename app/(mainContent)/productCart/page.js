// import Link from 'next/link';
// import Image from 'next/image';

export default function CartContainer({cartItems}) {

  console.log('cart:', cartItems); 

  // if (cartItems) {
  //   const { cartItemId, cartItemImage, cartItemDescription, cartItemSlug } = cartItems;
  // }

  return<div><h2>Hello Cart!</h2></div>

};

  // return (
  //   <div>
  //     {cartItems.length > 0 ? (
  //       <div className='cartContainer'>
  //         <Image
  //           src={`https://api.timbu.cloud/images/${cartItems.cartItemImage}`}
  //           alt={cartItems.cartItemSlug}
  //           width={150} 
  //           height={150} 
  //           priority
  //         />
  //         <p>{cartItems.cartItemDescription}</p>
  //         <p>{cartItems.cartItemPrice ? `Price: ${i}` : 'Price not available'}</p>
  //         <p>
  //           <Link className='checkoutLink' href="/checkout">Make Order</Link>
  //         </p>
  //       </div>
  //     ) : (
  //       <div className='cartEmpty'>
  //       <h2>No Item in the Cart</h2>
  //       <Link href="/products" className='cartLink'>Order Now</Link>
  //       </div>
  //     )}
  //   </div>
  // );




  