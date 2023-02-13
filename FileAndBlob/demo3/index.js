let oEditArea = document.querySelector('.editArea');
let oTitle = document.querySelector('.title');
let oButtons = document.querySelectorAll('.needOpenFile');

let fh = null;
const state = {
  isOpenFile: false
};

const proxy = new Proxy(state, {
  set(target, prop, value) {
    if (prop === 'isOpenFile') {
      if (value === true) {
        oButtons.forEach((button) => {
          button.disabled = false;
        })
      } else {
        oButtons.forEach((button) => {
          button.disabled = true;
        })
      }
    }
    return Reflect.set(target, prop, value);
  }
});

const onCreate = async (isSaveAs = false) => {
  const fileHandle = await window.showSaveFilePicker();
  if (!isSaveAs) {
    fh = fileHandle;
    oTitle.textContent = fh.name;
    oEditArea.value = '';
    proxy.isOpenFile = true;
  }
  return fileHandle;
}

const onOpen = async () => {
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  fh = fileHandle;
  oTitle.textContent = fh.name;
  oEditArea.value = await file.text();
  proxy.isOpenFile = true;
}

const onSave = async () => {
  if (!fh) {
    console.log('请先打开文件!');
    return;
  }
  const stream = await fh.createWritable();
  await stream.write(oEditArea.value);
  await stream.close();
}

const onSaveAs = async () => {
  if (!fh) {
    console.log('请先打开文件!');
    return;
  }
  const fileHandle = await onCreate(true);
  const stream = await fileHandle.createWritable();
  await stream.write(oEditArea.value);
  await stream.close();
}

const onClose = () => {
  if (!fh) {
    console.log('请先打开文件!');
    return;
  }
  fh = null;
  oTitle.textContent = '空文件';
  oEditArea.value = '';
  proxy.isOpenFile = false;
}