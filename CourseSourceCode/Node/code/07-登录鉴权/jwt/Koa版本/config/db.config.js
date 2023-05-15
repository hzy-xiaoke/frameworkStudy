const mongoose = require('mongoose');

mongoose.connect('mongodb://test:12345@localhost:27017/todo')
.then(() => {
    console.log('数据库连接成功');
})
.catch(() => {
    console.log('数据库连接失败');
});
