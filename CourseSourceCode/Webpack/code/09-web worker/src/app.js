const worker = new Worker(new URL('./work.js', import.meta.url));

worker.postMessage('hello web worker');

worker.onmessage = (message) => {
  console.log('处理结果 =>', message.data);
}