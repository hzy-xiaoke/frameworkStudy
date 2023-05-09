self.onmessage = (message) => {
  let data = message.data;
  console.log('待处理数据 =>', data);
  self.postMessage(data.toUpperCase());
}