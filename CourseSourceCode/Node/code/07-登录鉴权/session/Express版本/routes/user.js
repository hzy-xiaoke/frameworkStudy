const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 新增用户
router.post('/user', UserController.addUser);

// 更新用户
router.put('/user/:id', UserController.updateUser);

// 删除用户
router.delete('/user/:id', UserController.deleteUser);

// 查询用户
router.get('/user', UserController.getUsers);

// 查询某个用户
router.get('/user/:id', UserController.getUserById);

// 登录
router.post('/login', UserController.login);

// 退出登录
router.get('/logout', UserController.logout);

module.exports = router;
