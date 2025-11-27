const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:4173' }));

// route
app.get('/', (req, res) => {
    res.send('server test');
});

// api route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});