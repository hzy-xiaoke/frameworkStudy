const crypto = require("crypto")

function testMd5(){
    const hash = crypto.createHash("md5")

    hash.update("hello world")

    console.log(hash.digest("hex"))
}

function testSha1(){
    const hash = crypto.createHash("sha1")

    hash.update("hello world")

    console.log(hash.digest("hex"))
}

function testHmac(){
    const hmac = crypto.createHmac("sha256","secret-key")

    hmac.update("hello world")

    console.log(hmac.digest("hex"))
}

function testAESEncrypt(data,key,iv){
    let dep = crypto.createCipheriv("aes-128-cbc",key,iv)

    return dep.update(data,"binary","hex") + dep.final("hex")
}

function testAESDecrypt(crypted,key,iv){
    crypted = Buffer.from(crypted,"hex").toString("binary")

    let dep = crypto.createDecipheriv("aes-128-cbc",key,iv)

    return dep.update(crypted,"binary","utf8") + dep.final("utf8")
}

let key = "0123456789abcdef"
let iv = "abcdef0123456789"
let data = "hello world"

let crypted = testAESEncrypt(data,key,iv)

console.log(crypted)
console.log(testAESDecrypt(crypted,key,iv))
