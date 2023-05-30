const API = window.electronAPI;

const oOpenDialog = document.querySelector('#openDialog');
const oSaveDialog = document.querySelector('#saveDialog');
const oMessageBox = document.querySelector('#messageBox');

oOpenDialog.addEventListener('click', async () => {
  const { filePaths } = await API.showOpenDialog();
  // 选择的文件路径
  console.log(filePaths);
}, false);

oSaveDialog.addEventListener('click', async () => {
  const { filePath } = await API.showSaveDialog();
  // 保存的路径
  console.log(filePath);
}, false);

oMessageBox.addEventListener('click', async () => {
  const { response } = await API.showMessageBox();
  // 点击的按钮的索引
  console.log(response);
}, false);