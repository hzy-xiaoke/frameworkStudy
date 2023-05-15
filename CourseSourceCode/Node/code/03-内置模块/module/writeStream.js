const fs = require("fs")

const ws = fs.createWriteStream("../files/2.txt","utf-8")

ws.write("1111111\n")
ws.write("2222222\n")
ws.write("3333333\n")
ws.write("4444444\n")

ws.end()