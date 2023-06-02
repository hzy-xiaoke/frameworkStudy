const { contextBridge, ipcRenderer } = require('electron');

const captureImage = async () => {
  const result = await ipcRenderer.invoke('capture-image');
  return result;
};

const captureVideo = async () => {
  const result = await ipcRenderer.invoke('capture-video');
  return result;
};

contextBridge.exposeInMainWorld('electronAPI', {
  captureImage,
  captureVideo
});