// import { PRODUCTS_LIST } from "@/PRODUCTS";

// export function getLatestProducts() {
//   const shuffledProducts = [...PRODUCTS_LIST];

//   for (let i = shuffledProducts.length - 1; i > 0; i--) {
//     // Generate a random index from 0 to i
//     const j = Math.floor(Math.random() * (i + 1));
    
//     // Swap elements at index i and j
//     [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
//   }

//   return shuffledProducts.slice(0, 3);
// }

import {fetchProductsData} from '@/src/pages/handleFetchData';

export function getLatestProducts() {
  const PRODUCTS_LIST = fetchProductsData();

  const shuffledProducts = [...PRODUCTS_LIST];

  for (let i = shuffledProducts.length - 1; i > 0; i--) {
     // Generate a random index from 0 to i
     const j = Math.floor(Math.random() * (i + 1));
    
     // Swap elements at index i and j
     [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
   }

   return shuffledProducts.slice(0, 3);
}