const http = require('http');
const fs = require('fs');

const server1 = http.createServer((req, res) => {
  const log = `${Date.now()} - new request received: ${req.method} ${req.url}\n`;
  fs.appendFile('log.txt', log, (err) => {
    switch(req.url){
        case '/': res.end('Welcome to the home page!'); break;
        case '/about': res.end('This is the about page.'); break;
        default : res.end('Page not found.');
    }
  })
});

server1.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
