var express = require('express')
var app = express()
var path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"additionclient.html"));
 })
app.get('/addlogic', function (req, res) {
        var a = req.query.num1;
        var b = req.query.num2;
        var c = parseInt(a)+parseInt(b)
        console.log('result is ',c);
        res.end('result is '+c);
 })

 app.listen(5000,function(){
    console.log("Express App running at http://127.0.0.1:5000/");
})
