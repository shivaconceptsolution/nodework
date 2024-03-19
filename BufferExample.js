var buf = Buffer.from('Hello World');
console.log(buf)
for(var i=0;i<buf.length;i++)
{
    console.log(String.fromCharCode(buf[i]));
}
var buf1 = Buffer.alloc(5, 'a');
console.log(buf1)
for(var data of buf1)
{
    console.log(data)
}