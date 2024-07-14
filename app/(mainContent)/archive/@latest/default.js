'use client';

import ProductList from '@/components/products/productList';
import { useProductContext } from '@/src/context/ProductContext';


export default function GetLatestProducts() {
  const {products} = useProductContext();

  const getShuffledProducts = () => {
    const shuffledProducts = [...products];
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }
    return shuffledProducts.slice(0, 3);
  };

  const latestProducts = getShuffledProducts();

  return (
    <>
    <h2 className='latest'>Customers Also Viewed</h2>
    <ProductList products={latestProducts}/>
      </>
  );
}

