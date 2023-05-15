const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const multer = require('multer');
const upload = multer({ dest: 'public/uploads' });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
