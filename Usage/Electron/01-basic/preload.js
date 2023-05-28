const fs = require('fs');
const { contextBridge } = require('electron');

fs.writeFile('./files/hello.txt', 'hello electron', () => {
  console.log('done');
});

contextBridge.exposeInMainWorld('myAPI', {
  platform: process.platform
});
