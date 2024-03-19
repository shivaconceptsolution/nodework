var fs = require('fs')
fs.rename('abc1.txt', 'abcnew.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });