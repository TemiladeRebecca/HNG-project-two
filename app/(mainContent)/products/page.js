import ProductList from "@/components/products/productList"
import { PRODUCTS_LIST } from "@/PRODUCTS"


export default function  ProductsPage() {
    return <>
        <ProductList products={PRODUCTS_LIST} />
    </>
}