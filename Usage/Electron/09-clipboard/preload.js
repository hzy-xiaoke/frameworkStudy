const { contextBridge, clipboard } = require('electron');

const copy = (text) => {
  clipboard.writeText(text);
};

const show = () => {
  return clipboard.readText();
};

contextBridge.exposeInMainWorld('electronAPI', {
  copy,
  show
});