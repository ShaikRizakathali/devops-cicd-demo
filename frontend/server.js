const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Serve a simple HTML page
app.get('/', async (req, res) => {
    try {
        // Fetch from local backend
        const response = await axios.get('http://localhost:5000/api');
        res.send(`<h1>DevOps CI/CD Demo</h1><p>Backend says: ${response.data.message}</p>`);
    } catch (error) {
        res.send('<h1>DevOps CI/CD Demo</h1><p style="color:red;">Backend is not reachable yet.</p>');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});
