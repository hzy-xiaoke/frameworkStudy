const cheerio = require("cheerio")

function spiderMaoyan(data){
    let movies = []

    const $ = cheerio.load(data)
    let $movieList = $(".column.content")

    $movieList.each((index,value) => {
        movies[index] = {
            title: $(value).find(".title").text(),
            grade: $(value).find(".grade").text(),
            actor: $(value).find(".actor").text(),
            showInfo: $(value).find(".show-info").text()
        }
    })

    return JSON.stringify(movies)
}

module.exports = {
    spiderMaoyan
}