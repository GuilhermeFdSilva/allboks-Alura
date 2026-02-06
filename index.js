const server = require('./server');

server.listen(8000, () => {
    console.log("API disponível em http://localhost:8000")
});