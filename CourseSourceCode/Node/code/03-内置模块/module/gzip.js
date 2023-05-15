const http = require("http")
const fs = require("fs")
const zlib = require("zlib")

const gzip = zlib.createGzip()

http.createServer((req,res) => {
    if(req.url === "/favicon.ico"){
        return 
    }
    const readStream = fs.createReadStream("./fs.js")

    res.writeHead(200,{
        "Content-Type": "application/x-javascript;charset=utf-8",
        "Content-Encoding": "gzip"
    })

    readStream
        .pipe(gzip)
        .pipe(res)

}).listen(8888,() => {
    console.log("server start")
})

/*
  问题描述: 运行该文件代码,在浏览器进入相应URL,第1次可以获取到数据,但再刷新则获取不到数据,同时刷新到第6次后会出现以下提示信息
    (node:12240) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 unpipe listeners added to [Gzip]. Use emitter.setMaxListeners() to increase limit
    (Use `node --trace-warnings ...` to show where the warning was created)
    (node:12240) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [Gzip]. Use emitter.setMaxListeners() to increase limit
    (node:12240) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [Gzip]. Use emitter.setMaxListeners() to increase limit
    (node:12240) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 finish listeners added to [Gzip]. Use emitter.setMaxListeners() to increase limit
    (node:12240) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 drain listeners added to [Gzip]. Use emitter.setMaxListeners() to increase limit
    
    通过添加 require("events").EventEmitter.defaultMaxListeners = 0 可以使得提示信息没有了,但除第1次刷新,之后的刷新还是获取不到数据
 */