var http = require('http')
var url = require('url');
var data = http.createServer(function(req,res){
    
    var q = url.parse(req.url, true).query;
    var result = parseInt(q.num1)+parseInt(q.num2)
    console.log(result)
    res.write('result is '+result);
    res.end();
});
data.listen(8082);
console.log('server started at port 8082')
