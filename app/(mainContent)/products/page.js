'use client';

// import React, { useEffect, useState } from 'react';
import ProductList from "@/components/products/productList";
import { useProductContext } from "@/src/context/ProductContext";
// import { fetchProductsData } from '@/src/pages/handleFetchData'


export default function ProductsPage() {
    const { products } = useProductContext();

    // useEffect(() => {
    //     async function loadProducts() {
    //         try {
    //             const fetchedProducts = await fetchProductsData();
    //             setProducts(fetchedProducts);

                
    //         } catch (error) {
    //             console.error('Error loading products:', error);
    //         }
    //     }

    //     loadProducts();
    // }, []);

    return (
        <>
            <ProductList products={products} />
        </>
    );
}