const fs = require("fs")

// 创建目录
function testMkdir(){
    fs.mkdir("../avatar",(err) => {
        if(err && err.code == "EEXIST"){
            console.log("目录已存在")
        }
    })
}

// 重命名
function testRename(){
    fs.rename("../avatar","../avatar2",(err) => {
        if(err && err.code == "ENOENT"){
            console.log("当前目录不存在")
        }
    })
}

// 删除空目录
function testRmdir(){
    fs.rmdir("../avatar",(err) => {
        if(err && err.code == "ENOENT"){
            console.log("目录不存在")
        }
    })
}

// 写文件(覆盖)
function testWriteFile(){
    fs.writeFile("../avatar/info.txt","测试",(err) => {
        console.log(err)
    })
}

// 写文件(追加)
function testAppendFile(){
    fs.appendFile("../avatar/info.txt","\n测试",(err) => {
        console.log(err)
    })
}

// 读文件
function testReadFile(){
    fs.readFile("../avatar/info.txt",(err,data) => {
        if(!err){
            console.log(data.toString("utf-8"))
        }
    })
}

// 删除文件
function testUnlink(){
    fs.unlink("../avatar/info.txt",(err) => {
        console.log(err)
    })
}

// 查看目录或文件信息
function testStat(){
    fs.stat("../avatar",(err,data) => {
        console.log(data.isDirectory())
    })
}

// 读目录并删除目录下的文件
function testRmdir2(){
    fs.readdir("../avatar",(err,data) => {
        data.forEach(item => {
            fs.unlinkSync(`../avatar/${item}`)
        })

        fs.rmdir("../avatar",(err) => {
            console.log(err)
        })
    })
}