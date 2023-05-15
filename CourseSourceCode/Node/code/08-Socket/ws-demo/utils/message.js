const MessageType = {
  ERROR: -1,
  SYSTEM: 0,
  GROUP_CHAT: 1,
  GROUP_LIST: 2
};

function createMessage(type, sourceUser, content) {
  return JSON.stringify({
    type,
    sourceUser,
    content
  });
}

module.exports = {
  MessageType,
  createMessage
};