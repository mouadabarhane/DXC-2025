// server.js (Node.js example with express)
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();

// Read environment variables
const SN_INSTANCE_URL = process.env.SERVICE_NOW_URL;
const SN_USERNAME = process.env.SERVICE_NOW_USER;
const SN_PASSWORD = process.env.SERVICE_NOW_PASSWORD;

app.use(express.json());

// Authentication endpoint for ServiceNow
app.post('/api/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        // Send credentials to ServiceNow for authentication
        const response = await axios.post(
            `${SN_INSTANCE_URL}/api/now/table/incident`, // Example ServiceNow API endpoint
            {}, // Empty payload, can be customized
            {
                auth: {
                    username: SN_USERNAME,
                    password: SN_PASSWORD
                }
            }
        );

        // Check if the response is successful
        if (response.status === 200) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error logging in to ServiceNow:', error);
        res.status(500).json({ message: 'Login failed' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});