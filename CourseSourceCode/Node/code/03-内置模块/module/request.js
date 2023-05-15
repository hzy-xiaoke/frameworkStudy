const http = require("http")
const https = require("https")
const url = require("url")

function httpGet(){

}

function httpRequest(){

}

function httpsGet(reqURL,callback){
    let data = ""
    https.get(reqURL,(res) => {
        res.on("data",(chunk) => {
            data += chunk
        })

        res.on("end",() => {
            callback(data)
        })
    })
}

function httpsRequest(reqURL,config = {},callback){
    let data = ""
    const { hostname,path } = url.parse(reqURL)
    const options = {
        hostname: hostname,
        port: "443",
        path: path,
        method: config.method || "POST",
        headers: {
            "Content-Type": config.dataType || "application/json",
            "referer": reqURL,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36",
        }
    }

    const req = https.request(options,(res) => {
        res.on("data",(chunk) => {
            data += chunk
        })

        res.on("end",() => {
            callback(data)
        })
    })

    switch(config.dataType){
        case "application/json":
        default: {
            if(config.data){
                req.write(JSON.stringify(config.data))
            }
        }
    }
    
    req.end()
}

module.exports = {
    httpGet,
    httpRequest,
    httpsGet,
    httpsRequest
}
