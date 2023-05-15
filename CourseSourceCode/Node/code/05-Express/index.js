const express = require("express")
const LoginRouter = require("./route/LoginRouter")
const HomeRouter = require("./route/HomeRouter")

const app = express()

// 配置模板引擎
app.set("views","./views")
app.set("view engine","html")
app.engine("html",require("ejs").renderFile)

// 配置静态资源
app.use(express.static("public"))
app.use("/static",express.static("static"))
// 对于post请求,解析 application/json 格式的参数
app.use(express.json())
// 对于post请求,解析 applicaion/x-www-form-urlencoded 格式的参数
app.use(express.urlencoded({extended:false}))

// 注册路由
app.use("/home",HomeRouter)
app.use("/login",LoginRouter)

app.use((req,res) => {
    res.status(404).send("404 Not Found")
})

app.listen(8888,() => {
    console.log("server start")
})