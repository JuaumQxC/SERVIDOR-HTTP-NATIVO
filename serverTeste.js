// exercício 1 e 2
const PORTA = 3000;
datareq = new Date().toISOString()

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url} em ${datareq}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Recurso criado\n');
    console.log(`status atual: ${res.statusCode + 1}`)
});

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});
