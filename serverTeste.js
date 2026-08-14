// exercício 1
const http = require('node:http');

const PORTA = 3000;

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Recurso criado\n');
    console.log(`status atual: ${res.statusCode + 1}`)
});

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});
