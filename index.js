// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello, Mohamed Hamdy 3');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
