// import ProductItem from "./productItem";
// import classes from "./productList.module.css";

// export default function ProductList({ products }) {
//     // If products is an object with a list of items
//     const items = products.items || [];

//     if (!Array.isArray(items)) {
//         console.warn('Products.items is not an array:', items);
//         return null; // or display a loading indicator or error message
//     }

//     return (
        // <ul className={classes.products}>
        //     {items.map((product) => (
        //         <li key={product.id}>
        //             <ProductItem {...product} />
        //         </li>
        //     ))}
        // </ul>
//     );
// }

import { useProductContext } from '@/src/context/ProductContext';
import ProductItem from "./productItem";
import classes from "./productList.module.css";


export default function ProductList({products}) {
  const { loading, error } = useProductContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className={classes.products}>
       {products.map((product) => (
        <li key={product.id}>
          <ProductItem {...product} />
          </li>
      ))}
    </ul>
  );
}

