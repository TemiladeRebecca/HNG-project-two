'use client';

import { useProductContext } from '@/src/context/ProductContext';
import {notFound} from 'next/navigation';
import Image from 'next/image';


export default function InterceptedImagePage({params}) {
    const { products } = useProductContext();
  
  const productItemSlug = params.productSlug;
  
  const productItem = products.find(product => product.url_slug === productItemSlug)


  if (!productItem) {
      notFound();
  }

  

  return (
      <>
          <div className='selectedProduct'>
              <div className='selectedProductDiv'>
                  {productItem && productItem.photos && productItem.photos.length > 0 && (
                      <Image src={`https://api.timbu.cloud/images/${productItem.photos[0].url}`}
                       alt={productItem.url_slug}
                       fill
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       priority
                        />
                  )}
              </div>
          </div>  
      </>
  );
}