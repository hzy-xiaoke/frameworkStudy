
function render(data,res,type=""){
    res.writeHead(200,{"Content-Type":`${type ? type:"application/json"};charset=utf-8`})
    res.write(data)
    res.end()
}

const apiRoute = {
    "/api/login": (req,res) => {
        let url = new URL(req.url,"http://localhost:8888")

        let username = url.searchParams.get("username")
        let password = url.searchParams.get("password")

        if(username === "abc123" && password === "123456"){
            render(JSON.stringify({ok:1}),res)
        }else{
            render(JSON.stringify({ok:0}),res)
        }
    },
    "/api/loginpost": (req,res) => {
        let data = ""
        req.on("data",(chunk) => {
            data += chunk
        })

        req.on("end",() => {
            data = JSON.parse(data)

            let username = data.username
            let password = data.password

            if(username === "abc123" && password === "123456"){
                render(JSON.stringify({ok:1}),res)
            }else{
                render(JSON.stringify({ok:0}),res)
            }
        })
    }
}

module.exports = apiRoute