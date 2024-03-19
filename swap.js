var fs = require('fs');
var http = require('http')
var url = require('url')
async function writeFile(a,b,r)
{
    await fs.writeFile('swapresult.txt', `a=${a} and b=${b}`, function (err) {
        if (err) throw err;
        console.log('after swap value of a='+a+"b="+b + "ope="+r);
      });
}
var data = http.createServer((req,res)=>{
    var q = url.parse(req.url, true).query;
    var radiodata=q.ope;
    var a=q.num1
    var b=q.num2;
    var temp;
    temp=a;
    a=b;
    b=temp;
    writeFile(a,b,radiodata)
    //res.write('after swap value of a='+a+"b="+b);
   // res.statusCode=200;
  // res.end('after swap value of a='+a+"b="+b);
})
data.listen(8082);
console.log('server started at port 8082')