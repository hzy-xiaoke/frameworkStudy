const Router = require('@koa/router')

const router = new Router()

router
  .get('/', (ctx) => {
    let username = ctx.query?.username
    let password = ctx.query?.password

    console.log(ctx.query)

    if (username === "abc123" && password === "123456") {
      ctx.body = {
        ok: 1
      }
    } else {
      ctx.body = {
        ok: 0
      }
    }
  })
  .post('/', (ctx) => {
    let username = ctx.request.body?.username
    let password = ctx.request.body?.password

    console.log(ctx.request.body)
  
    if (username === "abc123" && password === "123456") {
      ctx.body = {
        ok: 1
      }
    } else {
      ctx.body = {
        ok: 0
      }
    }
  })

module.exports = router