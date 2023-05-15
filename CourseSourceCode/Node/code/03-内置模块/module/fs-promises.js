const fs = require("fs").promises

function testRmdir2(){
    fs.readdir("../avatar").then(async (data) => {
        await Promise.all(data.map(item => fs.unlink(`../avatar/${item}`)))
        await fs.rmdir("../avatar")
    })
}

testRmdir2()