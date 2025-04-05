const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('WELCOME TO THE BUYZY SHOPPING!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});