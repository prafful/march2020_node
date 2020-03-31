var  http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    var myquery = req.url
    res.write("Request came from: " + myquery)
    res.write("<br>")

    var urlquery = url.parse(myquery, true).query
    console.log("Reseived query param as JSON object: ");
    console.log(urlquery);

    var query1 = urlquery.id
    var query2 = urlquery.location

    res.write("<h4>Friend Details</h4>")
    res.write("Id: " + query1)
    res.write("<br>")
    res.write("Location: " + query2)
    res.write("<br>")
    res.write(JSON.stringify(urlquery))
    res.end()

})

server.listen(1234)