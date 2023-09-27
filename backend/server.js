const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Change to a different port, e.g., 3000

app.get('/api/data', (req, res) => {
    // Replace this with your data retrieval logic
    const data = { message: 'Hello from the server!' };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});