var http = require('http')
var data = http.createServer((req,res)=>{
    var p=120000;
    var r=2;
    var t=2;
    var si=(p*r*t)/100;
    res.write('result is '+si);
    res.end();
});
data.listen(8082);
console.log('server started at port 8082')
