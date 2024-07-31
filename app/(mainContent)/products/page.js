'use client';

import ProductList from "@/components/products/productList";
import { useProductContext } from "@/src/context/ProductContext";


export default function ProductsPage() {
    const { products } = useProductContext();

    return (
        <>
            <ProductList products={products} />
        </>
    );
}