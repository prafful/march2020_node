var http = require('http')

var server = http.createServer(function(request, response){
                                   console.log("******************request start*********************")                     
                                   console.log("");
                                   console.log("");
                                   console.log("");
                                   console.log(request);
                                   console.log("");
                                   console.log("");
                                   console.log("");
                                   console.log("******************request end*********************")                     
                                   //send back the response to browser
                                   response.writeHead(200, {'Content-Type':'text/html'})
                                   response.write("<h1>Working with response from node!</h1>")
                                   response.write("<h4>My custom response!</h4>")
                                   console.log("*******************response start********************")                     
                                   console.log("");
                                   console.log("");
                                   console.log("");
                                   console.log(response);
                                   console.log("");
                                   console.log("");
                                   console.log("");
                                   console.log("*******************response end********************")   
                                   response.end()
                                })

server.listen(1234)                                