const API = window.electronAPI;

const oTitle = document.querySelector('#title');
const oSettingBtn = document.querySelector('#settingBtn');
const oOpenBtn = document.querySelector('#openBtn');
const oFilePath = document.querySelector('#filePath');
const oCount = document.querySelector('#count');

oSettingBtn.addEventListener('click', () => {
  let title = oTitle.value;
  API.setTitle(title);
}, false);

oOpenBtn.addEventListener('click', async () => {
  const filePath = await API.openFile();
  oFilePath.innerText = filePath;
}, false);

API.handleCount((event, value) => {
  const oldValue = Number(oCount.innerText);
  const newValue = oldValue + value;
  oCount.innerText = newValue;
  event.sender.send('get-count', newValue);
});