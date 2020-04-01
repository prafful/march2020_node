var express = require('express')
var mysql = require('mysql')
var bodyparser = require('body-parser')

var connection = mysql.createConnection({
                    host:'localhost',
                    user:'root',
                    password:'root',
                    port:3306,
                    database:'nodecreatedb1'
})

connection.connect((error)=>{
    if(error){
        throw error
    }
    console.log("Connected to database - nodecreatedb1");
})



var app = express()
app.use(bodyparser.json())

app.get('/', function(req, res){
    res.send('Hello from node and express!!!!')
})

app.get('/friend/all', (req, res)=>{
    //connect with db and get all friends!
    //res.send('Get all friends from DB!')
    var query = 'select * from friendsnew'
    connection.query(query, (error, success)=>{
        if(error){
            throw error
        }
        console.log(success);
        //console.log(JSON.stringify(success));
        //once all friends are received, send back the response!
        res.json(success)
        //res.send((JSON.stringify(success)))
    })
    
})

app.get('/friend/:id', (req, res)=>{
    //console.log(req);
    console.log(req.params);
    console.log(req.params.id);
    var query = 'select * from friendsnew where id = ' + req.params.id
    connection.query(query, (error, success)=>{
        if (error){
            throw error
        }
        res.json(success)
    })
})


app.post('/friend/add', (req, res)=>{
    console.log(req.body);
    var name = req.body.name
    var location = req.body.location
    var query = "insert into friendsnew ( name, location) values('"+name +"','"+ location  + "')"
    console.log(query);
    connection.query(query, (error)=>{
        if(error){
            throw error
        }
        res.send("Data inserted in DB")
        
    })
   
})

app.put('/friend/update/:id', (req, res)=>{
    console.log(req.body);
    var id = req.params.id
    var name = req.body.name
    var location = req.body.location
    var query = "update friendsnew set name ='"+name+"', location='"+location+"' where id=" + id
    console.log(query);
    connection.query(query, (error)=>{
        if(error){
            throw error
        }
        res.send("Data update in DB with id of " + id)
        
    })
})


app.delete('/friend/delete/:id', (req, res)=>{
    console.log(req.body);
    var id = req.params.id
    var query = "delete from friendsnew where id=" + id
    console.log(query);
    connection.query(query, (error)=>{
        if(error){
            throw error
        }
        res.send("Data deleted in DB with id of " + id)
        
    })
})
app.listen(1234)