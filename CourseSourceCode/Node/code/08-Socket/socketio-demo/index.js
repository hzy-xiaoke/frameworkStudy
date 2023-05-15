const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router = require('./routes/index');
const JWT = require('./utils/JWT');
const { MessageType, createMessage } = require('./utils/message');

// 支持解析json数据
app.use(express.json());
// 配置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 注册路由
app.use('/api', router);

io.on('connection', (socket) => {
  const token = socket.handshake.query.token;
  const payload = JWT.verify(token);
  if (payload) {
    socket.payload = payload;
    socket.emit(MessageType.SYSTEM, createMessage(
      null,
      '欢迎来到聊天室'
    ));
    sendOnlineUsers();
  } else {
    socket.emit(MessageType.ERROR, createMessage(
      null,
      '未授权'
    ));
  }

  socket.on(MessageType.GROUP_CHAT, (msg) => {
    socket.broadcast.emit(MessageType.GROUP_CHAT, createMessage(
      socket.payload.username,
      msg.content
    ));
  });

  socket.on('disconnect', () => {
    sendOnlineUsers();
  });
});

// 发送在线用户列表
function sendOnlineUsers() {
  io.sockets.emit(MessageType.GROUP_LIST, createMessage(
    null,
    Array.from(io.sockets.sockets).map(socket => socket[1].payload).filter(item => item)
  ));
}

server.listen(3000, () => {
  console.log('Server running in:http://localhost:3000');
});