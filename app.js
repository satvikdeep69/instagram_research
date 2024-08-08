const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Handle OAuth Redirect
app.get('/auth/instagram/callback', (req, res) => {
    const { code } = req.query;

    if (code) {
        // Exchange the code for an access token (not implemented here)
        res.send(`OAuth flow complete! Your code is: ${code}`);
    } else {
        res.status(400).send('No code provided');
    }
});

// Handle Deauthorize Callback
app.post('/auth/instagram/callback', (req, res) => {
    const { signed_request } = req.body;

    if (signed_request) {
        // Decode the signed request and handle deauthorization (not implemented here)
        res.send('Deauthorize callback received.');
    } else {
        res.status(400).send('No signed request provided');
    }
});

// Handle Data Deletion Request
app.post('/auth/instagram/data_deletion', (req, res) => {
    // Handle data deletion request (not implemented here)
    res.send('Data deletion request received.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
