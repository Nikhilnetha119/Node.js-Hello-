const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome home\n');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to About Us page\n');
    } else if (url === '/node') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my Node Js project\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
