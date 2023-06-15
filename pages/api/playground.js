export default async function videoCrawl(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    // Handle request
    if (req.method === 'GET') {
        // Your code for handling GET requests goes here
    } else if (req.method === 'POST') {
        // Your code for handling POST requests goes here
    } else if (req.method === 'PUT') {
        // Your code for handling PUT requests goes here
    } else if (req.method === 'DELETE') {
        // Your code for handling DELETE requests goes here
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
        res.status(500).json({});
    }

    res = await fetch('https://noonoo28.tv/en_drama/5191#afdf0ec7sF1AScGo');
    return res;
};


