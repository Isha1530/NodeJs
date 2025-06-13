
// const http = require('http');
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page' + ' hey ' + req.query.name + ' ' + req.query.age);
});

// const server = http.createServer(app);

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
