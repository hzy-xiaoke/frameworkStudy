const { contextBridge, ipcRenderer } = require('electron');

const showOpenDialog = () => {
  return ipcRenderer.invoke('openDialog')
};

const showSaveDialog = () => {
  return ipcRenderer.invoke('saveDialog');
};

const showMessageBox = () => {
  return ipcRenderer.invoke('messageBox');
};

contextBridge.exposeInMainWorld('electronAPI', {
  showOpenDialog,
  showSaveDialog,
  showMessageBox
});
