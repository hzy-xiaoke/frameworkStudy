const fs = require("fs")

const readStream = fs.createReadStream("../files/1.txt")

const writeStream = fs.createWriteStream("../files/2.txt")

readStream.pipe(writeStream)