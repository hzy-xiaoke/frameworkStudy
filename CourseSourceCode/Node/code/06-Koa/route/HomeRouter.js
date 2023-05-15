const Router = require('@koa/router')

const router = new Router()

router.get('/', async (ctx) => {
  await ctx.render('home', {
    now: new Date().toLocaleString()
  })
})

module.exports = router