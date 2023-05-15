const server = require("http")
const url = require("url")
const { renderHTML } = require("./module/renderHTML")
const { renderStatus } = require("./module/renderStatus")

// 创建服务器
server.createServer((req,res) => {
    if(req.url === "/favicon.ico"){
        return 
    }
    // console.log(url.parse(req.url,true))
    // console.log(new URL(req.url,"http://127.0.0.1:3000"))

    const pathname = url.parse(req.url).pathname

    res.writeHead(renderStatus(pathname),{
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    })
    
    renderHTML(pathname,{
        ...url.parse(req.url,true).query,
        request: req,
        response: res
    })
}).listen(8888,() => {
    console.log("server start")
})
