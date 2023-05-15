const Router = require('@koa/router')
const homeRouter = require('./HomeRouter')
const loginRouter = require('./LoginRouter')

const router = new Router()

// 统一加前缀
// router.prefix('/api')

router.use('/login', loginRouter.routes(), loginRouter.allowedMethods())

router.use('/home', homeRouter.routes(), homeRouter.allowedMethods())
// 重定向
router.redirect('/', '/home')

module.exports = router