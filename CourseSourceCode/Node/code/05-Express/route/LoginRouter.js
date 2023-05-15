const express = require("express")

const router = express.Router()

router.get("/",(req,res) => {
    let username = req.query?.username
    let password = req.query?.password

    // console.log(req.query)

    if(username === "abc123" && password === "123456"){
        res.send({
            ok: 1
        })
    }else{
        res.send({
            ok: 0
        })
    }
})

router.post("/",(req,res) => {
    let username = req.body?.username
    let password = req.body?.password
    
    // console.log(req.body)

    if(username === "abc123" && password === "123456"){
        res.send({
            ok: 1
        })
    }else{
        res.send({
            ok: 0
        })
    }
})

module.exports = router