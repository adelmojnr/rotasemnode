const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/html"});
  if(request.url == '/'){
    response.write("Olá mundo, sou a page principal xD");
    response.end();

  }else if (request.url == '/css'){
      fs.readFile('./index.html', function(err, html){
        if (err) response.write('Page não encontrada');
        response.write(html);
        response.end();
      });
    }
    
});

server.listen(3000, function() {
  console.log('Funcionou lindamente');
});