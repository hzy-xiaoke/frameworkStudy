const http = require("http")

const Router = {}

function use(obj){
    Object.assign(Router,obj)
}

function start(){
    http.createServer((req,res) => {

        let url = new URL(req.url,"http://localhost:8888")
        let pathname = url.pathname
    
        try{
            Router[pathname](req,res)
        }catch(error){
            Router["/404"](req,res)
        }
    
    }).listen(8888,() => {
        console.log("sever start")
    })
}

module.exports = {
    start,
    use
}