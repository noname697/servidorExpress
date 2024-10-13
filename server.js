import http from "http"

const PORT = 3000

const rotas = {
    "/": "curso de Express API",
    "/livros": "Entrei na rota Livros",
    "/autores": "Entrei na rota Autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(rotas[req.url])
})

server.listen(PORT, () => {
    console.log("Escutando a porta 3000")
})


