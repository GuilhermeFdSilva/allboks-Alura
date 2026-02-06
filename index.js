const server = require('./server');

server.listen(8000, () => {
    console.log("Acesse essa API em http://localhost:8000")
    console.log(":)")
});