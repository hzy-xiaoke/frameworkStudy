const express = require("express")

const router = express.Router()

router.get("/",(req,res) => {
    res.render("home",{
        list: [
            {
                name: "zhangsan",
                age: 20
            },
            {
                name: "lizi",
                age: 15
            }
        ]
    })
})

router.get("/list",(req,res) => {
    res.send([
        {
            name: "zhangsan",
            age: 20
        },
        {
            name: "lizi",
            age: 15
        }
    ])
})


module.exports = router