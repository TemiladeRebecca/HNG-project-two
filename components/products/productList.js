import ProductItem from "./productItem";
import classes from "./productList.module.css";

export default function ProductList({ products }) {
    // If products is an object with a list of items
    const items = products.items || [];
    console.log(items);

    if (!Array.isArray(items)) {
        console.warn('Products.items is not an array:', items);
        return null; // or display a loading indicator or error message
    }

    return (
        <ul className={classes.products}>
            {items.map((product) => (
                <li key={product.id}>
                    <ProductItem {...product} />
                </li>
            ))}
        </ul>
    );
}