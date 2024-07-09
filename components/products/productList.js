import ProductItem from "./productItem";
import classes from "./productList.module.css"

export default function ProductList({products}) {
    return <>
        <ul className={classes.products} >
            {products.map((product) => 
            <li key={product.id} >
                <ProductItem {...product} />
            </li>)}
        </ul>
    </>
}