var file = require('fs')

var readTextFile = function(){
    console.log("Reading file!!!!");
    file.readFile('hello.txt','utf8', function(err, data){
        if(err){
            console.log(err);
            throw err
        }
        console.log(data);
        var fileContent = data
        console.log(fileContent);
        //console.log(data.toString());

    })
}

readTextFile()