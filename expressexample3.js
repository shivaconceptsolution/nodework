var express = require('express')
var app = express()
var path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"myform.html"));
 })
app.get('/process_get', function (req, res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
     };
     console.log(response);
     res.end(JSON.stringify(response));
 })

 app.listen(5000,function(){
    console.log("Express App running at http://127.0.0.1:5000/");
})
