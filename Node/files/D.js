var http = require('http');
http.createServer(function(req,res){
        res.write("Hello Nodemon");
        res.end();
    }).listen(4000); 