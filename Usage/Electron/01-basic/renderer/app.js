const fs = require('fs');

fs.writeFile('./files/hello.txt', 'hello electron', () => {
  console.log('done');
});