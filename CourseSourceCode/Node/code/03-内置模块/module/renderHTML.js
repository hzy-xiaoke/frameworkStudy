const { httpsGet,httpsRequest } = require("./request")
const { spiderMaoyan } = require("./spider")

function renderHTML(url,options = {}){
    const { request,response } = options

    switch(url){
        case "/home":
            response.end("首页")
            break
        case "/list":
            response.end("列表页面")
            break 
        case "/api/list": {
            let data = JSON.stringify({
                name: "zhangsan",
                age: 19
            })
            if(options.callback){
                data = `${options.callback}({
                    name: "zhangsan",
                    age: 19
                })`
            }
            response.end(data)
            break
        }
        case "/maoyan/api/list": {
            httpsGet("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E5%AE%89&ci=621&channelId=4",(data) => {
                response.end(data)
            })
            break
        }
        case "/youpin/api/list": {
            httpsRequest("https://m.xiaomiyoupin.com/mtop/market/search/placeHolder",{
                data: [{}, {baseParam: {ypClient: 1}}]
            },(data) => {
                response.end(data)
            })
            break
        }
        case "/maoyan/spider":
            httpsGet("https://i.maoyan.com/",(data) => {
                response.end(spiderMaoyan(data))
            })
            break
        default:
            response.end("404 Not Found")
    }
}

module.exports = {
    renderHTML
}