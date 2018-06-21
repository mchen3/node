const http = require('http');

const server = http.createServer((request, response) => {

  console.log('I hear you');

})

server.listen(3000);