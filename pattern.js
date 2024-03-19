var data=''
for(var i=1;i<=5;i++)
{
    var ch1=65;
    for(var j=1;j<=6-i;j++)
    {
        if(i%2!=0)
        {
        data+=String.fromCharCode(ch1);
       
        }
        else
        {
        data+=(String.fromCharCode(ch1+32));
        
        }
        ch1++;

    }
    data+="\n";
}

console.log(data)