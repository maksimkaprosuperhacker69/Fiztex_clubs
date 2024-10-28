const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000);