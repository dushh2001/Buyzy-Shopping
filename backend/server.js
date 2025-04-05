const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 9000;

app.get('/', (req, res) => {
    res.send('WELCOME TO THE BUYZY SHOPPING!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});