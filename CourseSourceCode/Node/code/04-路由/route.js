const fs = require("fs")
const path = require("path")
const mime = require("mime")

function render(path,res,type=""){
    res.writeHead(200,{"Content-Type":`${type ? type:"text/html"};charset=utf-8`})
    res.write(fs.readFileSync(path,"utf-8"))
    res.end()
}

const route = {
    "/": (req,res) => {
        render("./static/home.html",res)
    },
    "/home": (req,res) => {
        render("./static/home.html",res)
    },
    "/login": (req,res) => {
        render("./static/login.html",res)
    },
    "/404": (req,res) => {
        if(renderStaticFile(req,res)){
            return
        }

        res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
        res.write(fs.readFileSync("./static/404.html","utf-8"))
        res.end()
    }
}

function renderStaticFile(req,res){
    let url = new URL(req.url,"http://localhost:8888")
    let pathname = url.pathname
    let filePath = path.join(__dirname,"/static",pathname)
    
    // 如果文件存在
    if(fs.existsSync(filePath)){
        // 文件扩展名
        let suffix = pathname.split(".").splice(-1)
        render(filePath,res,mime.getType(suffix))
        return true
    }else{
        return false
    }
}

module.exports = route