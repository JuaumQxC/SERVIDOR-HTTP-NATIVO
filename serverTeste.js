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

// exercício 3
const PORTA = 3000;

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(`${JSON.stringify({ status: "ok" })}`);
});

server.listen(PORTA, () => {
    console.log(`Servidor escutando em http://localhost:${PORTA}`);
});

// exercício 4:
// acreditava que, ao tirar o res.end() do codigo acima iria dar alguma mensagem de erro,
// mas fui surpreendido em ver que restava apenas uma página em branco no servidor.