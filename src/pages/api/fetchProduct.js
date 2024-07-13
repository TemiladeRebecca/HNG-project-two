export default async function handler(req, res) {
    const url = 'https://api.timbu.cloud/products';
    const params = {
        organization_id: 'baeef2ef705c4c299e76bf456f276e05',
        Appid: 'RHP49RUX9ZORM8Z',
        Apikey: '3198b6ff1a4141debb22334bc052c85620240712152758922490'
    };

    const queryString = new URLSearchParams(params).toString();

    try {
        const response = await fetch(`${url}?${queryString}`);
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
