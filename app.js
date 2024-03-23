const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('My name is Nikhil');
})

server.listen(4001, () => {
    console.log('Server is running on port 4000');
})