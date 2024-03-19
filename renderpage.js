const http = require('http')
const url = require('url')
const fs = require('fs')

const data = http.createServer((req,res)=>{
    var q = url.parse(req.url, true);
    console.log(q);
    var filename = "." + q.pathname;
    console.log(filename)
    fs.readFile(filename, function(err, data) {

        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<a href='./home.html'>Home</a> ");
        res.write("<a href='./about.html'> About us</a>");
        res.write("<a href='./contact.html'> Contact us</a>");
        res.write(data);
        
        return res.end();
      });
});
data.listen(2000);
