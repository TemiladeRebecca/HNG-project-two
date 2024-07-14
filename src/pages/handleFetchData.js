//
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function fetchProductsData() {

    try {
        const response = await fetch(`${API_BASE_URL}/api/fetchProducts`);
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
