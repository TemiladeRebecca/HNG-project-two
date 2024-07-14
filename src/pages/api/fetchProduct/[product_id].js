//
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
const APPID = process.env.NEXT_PUBLIC_APPID;
const APIKEY = process.env.NEXT_PUBLIC_APIKEY;
const URL = process.env.NEXT_PUBLIC_API_TIMBU_URL;

export default async function handler(req, res) {
    const { product_id } = req.query;

    if (!product_id) {
        return res.status(400).json({ error: 'Product ID is required' });
    }

    const url = URL;
    const params = {
        organization_id: ORGANIZATION_ID,
        Appid: APPID,
        Apikey: APIKEY
    };

    const queryString = new URLSearchParams(params).toString();

    try {
        const response = await fetch(`${url}/products/${product_id}?${queryString}`, {
            mode: 'no-cors'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        res.status(200).json(data); // Send JSON response to the client
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}
