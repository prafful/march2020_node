var file = require('fs')
var http = require('http')

http.createServer(function(rq,rs){
    rs.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    rs.write("<h3>Read multilingual file from server and render in browser!</h3>")

    file.readFile('hello.txt', 'utf8', function(err, data){
        if(err){
            console.log(err);
            rs.write(err)
            rs.end()
            throw err
        }

        rs.write(data)
        rs.end()
    })

}).listen(1234)

//server.listen(1234)