const Router = require('@koa/router');
const router = new Router();

const loginRouter = require('./login');
const userRouter = require('./user');

router.get('/', async (ctx, next) => {
  await ctx.render('index');
});

router.use('/login', loginRouter.routes(), loginRouter.allowedMethods());
router.use('/api', userRouter.routes(), userRouter.allowedMethods());

module.exports = router;
