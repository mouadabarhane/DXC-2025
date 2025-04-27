const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const cors = require('cors');
const User = require('./models/User');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const serviceNowInstance = process.env.SERVICENOW_INSTANCE_URL;
const serviceNowUser = process.env.SERVICENOW_USERNAME;
const serviceNowPassword = process.env.SERVICENOW_PASSWORD;

const axiosInstance = axios.create({
    baseURL: serviceNowInstance,
    auth: {
        username: serviceNowUser,
        password: serviceNowPassword,
    },
    headers: {
        'Content-Type': 'application/json',
    },
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

const generateToken = (userId) => {
    const secret = process.env.JWT_SECRET;
    const expiresIn = '1h';
    return jwt.sign({ userId }, secret, { expiresIn });
};

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization'] ?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
};

app.post('/api/register', async(req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

app.post('/api/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user.id);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

app.get('/api/incident', authenticateJWT, async(req, res) => {
    try {
        const response = await axiosInstance.get('/api/now/table/incident');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from ServiceNow:', error);
        res.status(500).json({ message: 'Error fetching data from ServiceNow' });
    }
});

app.post('/api/incident', authenticateJWT, async(req, res) => {
    try {
        const newIncident = req.body;
        const response = await axiosInstance.post('/api/now/table/incident', newIncident);
        res.status(201).json(response.data);
    } catch (error) {
        console.error('Error posting data to ServiceNow:', error);
        res.status(500).json({ message: 'Error posting data to ServiceNow' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});