const path = require('path');
const express = require('express');
const WebSocket = require('ws');
const WebSocketServer = WebSocket.WebSocketServer;
const wss = new WebSocketServer({ port: 8080 });
const router = require('./routes/index');
const JWT = require('./utils/JWT');
const { MessageType, createMessage } = require('./utils/message');

const app = express();

// 支持解析json数据
app.use(express.json());
// 配置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// websocket响应
wss.on('connection', (ws, req) => {
  const url = new URL(req.url, 'ws://localhost:8080');
  const token = url.searchParams.get('token');
  const payload = JWT.verify(token);
  if (payload) {
    ws.payload = payload;
    ws.send(createMessage(
      MessageType.SYSTEM,
      null,
      '欢迎来到聊天室'
    ));
    sendOnlineUsers();
  } else {
    ws.send(createMessage(
      MessageType.ERROR,
      null,
      '未授权'
    ));
  }
  ws.on('message', (msgObj) => {
    const data = JSON.parse(msgObj);
    console.log('收到信息:', data.content);
    
    if (data.targetUser === 'all') {
      // 转发给其他客户端
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(createMessage(
            data.type,
            ws.payload.username,
            data.content
          ), { binary: false });
        }
      });
    }

  });

  ws.on('close', () => {
    sendOnlineUsers();
  });
  
});

// 发送在线用户列表
function sendOnlineUsers() {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(createMessage(
        MessageType.GROUP_LIST,
        null,
        Array.from(wss.clients).map(client => client.payload.username).join('|')
      ));
    }
  });
}

// 注册路由
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running in: http://localhost:3000');
});