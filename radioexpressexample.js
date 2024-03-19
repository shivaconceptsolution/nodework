var express = require('express')
var app = express()
var path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"radioexample.html"));
 })

app.get('/radiologic', function (req, res) {
    var a = req.query.course;
    let course=''
    let fees=0
   for(var item of a)
   {
      var data = item.split('-')
      fees+=parseInt(data[1])
      course+=data[0] + " "

   }
    console.log('Total Fees  is ',course);
    res.end('Course name is '+ course + 'Total Fees is '+fees);
})

 app.listen(5000,function(){
    console.log("Express App running at http://127.0.0.1:5000/");
})