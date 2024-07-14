'use client';

import { useProductContext } from '@/src/context/ProductContext';
import {notFound} from 'next/navigation';


export default function InterceptedImagePage({params}) {
    const { products } = useProductContext();
  
  const productItemSlug = params.productSlug;
  console.log(params);
  const productItem = products.find(product => product.url_slug === productItemSlug)


  if (!productItem) {
      notFound();
  }

  

  return (
      <>
          <div className="header">
              <div className='image-container'>
                  {productItem && productItem.photos && productItem.photos.length > 0 && (
                      <img className='image' src={`https://api.timbu.cloud/images/${productItem.photos[0].url}`} alt={productItem.url_slug} />
                  )}
              </div>
          </div>  
      </>
  );
}