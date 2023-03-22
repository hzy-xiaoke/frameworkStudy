const express = require('express');
const app = express();
const { Server } = require('socket.io');

const io = new Server(3000, {
  cors: {
    origin: '*'
  }
});

const userList = [];

io.on('connection', (socket) => {
  const username = socket.handshake.query.username;
  const userInfo = userList.find(item => item.username === username);

  if (userInfo) {
    userInfo.id = socket.id;
  } else {
    userList.push({
      id: socket.id,
      username
    });
  }

  io.emit('online', {
    userList
  });
  console.log(userList);

  socket.on('send', ({ fromUsername, toUsername, message, dateTime }) => {
    const target = userList.find(item => item.username === toUsername);
    const targetId = target && target.id;
    const targetSocket = io.sockets.sockets.get(targetId);

    if (targetSocket) {
      targetSocket.emit('receive', {
        fromUsername: fromUsername,
        toUsername: toUsername,
        message: message,
        dateTime: dateTime
      });
    }
  });

  socket.on('disconnect', () => {
    const closeIndex = userList.findIndex(item => item.id === socket.id);
    userList.splice(closeIndex, 1);

    io.emit('online', {
      userList
    });
    console.log(userList);
  });
});

app.listen(8000, () => {
  console.log('Server running...');
});