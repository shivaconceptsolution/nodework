var http = require('http')
var data = http.createServer(function(req,res){
    res.write('welcome in node js server');
    res.end();
});
data.listen(8081);
console.log('server started at port 8081')
