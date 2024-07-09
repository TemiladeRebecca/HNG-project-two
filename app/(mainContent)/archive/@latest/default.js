import ProductList from "@/components/products/productList";
import { getLatestProducts } from "@/lib/product";

export default function LatestProducts () {
    const newProducts = getLatestProducts();
    
    return(
        <>
            <h2 className='latest'>Customers Also Viewed</h2>
            <ProductList products={newProducts}/>
        </>
    );
}