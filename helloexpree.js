var express = require('express')
var app = express()
app.get('/',function(req,res){
    res.send('welcome in express js')
})

app.get('/hello',function(req,res){
    res.send('hello world GET')
})

app.post('/hello',function(req,res){
    res.send('hello world POST')
})
app.put('/hello',function(req,res){
    res.send('hello world PUT')
})
app.delete('/hello',function(req,res){
    res.send('hello world Delete')
})

app.patch('/hello',function(req,res){
    res.send('hello world PATCH')
})
app.listen(5000,function(){
    console.log("Express App running at http://127.0.0.1:5000/");
})
