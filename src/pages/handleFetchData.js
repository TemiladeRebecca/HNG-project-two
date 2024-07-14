export default async function fetchProductsData() {
    try {
        const response = await fetch('api/fetchProduct');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function fetchProductItem(product_id) {
    try {
        const response = await fetch(`api/fetchProduct/${product_id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}