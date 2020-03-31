var http = require('http')

var server = http.createServer(function(request, response){
                                   var myquery = request.url
                                   response.writeHead(200, {'Content-Type':'text/html'})
                                   response.write("<h1>Working with request from node!</h1>")
                                   response.write("<h3>Request received from:</h3>")
                                   console.log(myquery);
                                   response.write("<p>"+ myquery +"</p>")
                                   response.end()
                                })

server.listen(1234)                                