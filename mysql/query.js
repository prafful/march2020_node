var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port: 3306,
    database:'nodecreatedb1'
})

connection.connect(function(error){
    if(error){
        throw error
    }
    console.log("Connected to MySQL database!");
    //var sql = "create table friends (id int(8), name varchar(32), location varchar(32))"
    //var sql = "insert into friends (id, name, location) values (1, 'obb', 'chennai')"
    var sql = "insert into friends (id, name, location) values ?"
    var multiplerows = [
        [2, 'ola', 'pune'],
        [3, 'uber', 'bengaluru'],
    ]
    connection.query(sql, [multiplerows],function(error){
        if(error){
            throw error
        }
        //console.log("Table created!");
        console.log("Multiple row insert success!!!!");
    })

    var readsql = "select id, name, location from friends"

    connection.query(readsql,function(error, result){
        if(error){
            throw error
        }
        //console.log("Table created!");
        console.log("Rows from tables!!!!");
        console.log(JSON.stringify(result));
    })


})
