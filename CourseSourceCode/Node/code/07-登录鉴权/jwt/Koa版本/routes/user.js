const Router = require('@koa/router');
const UserController = require('../controllers/UserController');
const multer = require('@koa/multer');
const upload = multer({ dest: 'public/uploads' });

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'user api';
});

// 新增用户
router.post('/user', upload.single('avatar'), UserController.addUser);

// 更新用户
router.put('/user/:id', UserController.updateUser);

// 删除用户
router.delete('/user/:id', UserController.deleteUser);

// 查询用户列表
router.get('/users', UserController.getUsers);

// 查询某个用户
router.get('/user/:id', UserController.getUserById);

// 用户登录
router.post('/login', UserController.login);

module.exports = router;
