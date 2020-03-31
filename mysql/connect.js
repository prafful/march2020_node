var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port: 3306
})

connection.connect(function(err){
    if(err){
        console.log("Not connected: " + err);
        throw err
    }
    console.log("Holla!!!! Connected to MySQL server!!!!");
    console.log("Creating database!");
    connection.query("create database nodecreatedb1", function(error, success){
        if(error){
            console.log("Database not created!");
            throw error
        }
        console.log(success);
    })

})