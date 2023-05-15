function renderStatus(url){
    var arr = [
        "/home",
        "/list",
        "/api/list",
        "/maoyan/api/list",
        "/youpin/api/list",
        "/maoyan/spider",
    ]
    return arr.includes(url) ? 200 : 404
}

module.exports = {
    renderStatus
}