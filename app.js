const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>My Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('<html>');
        return res.end();

    } else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>My Page</title></head>');
        res.write('<body><h1>Welcome About us page</h1></body>');
        res.write('<html>');
        return res.end();

    } else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>My Page</title></head>');
        res.write('<body><h1>Hello from my Node.js page</h1></body>');
        res.write('<html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Project!</h1></body>');
    res.write('<html>');
    res.end();
})

server.listen(4000);