let oContainer = document.querySelector('.container');
let oList = oContainer.querySelector('.list');
let oTextArea = oContainer.querySelector('textarea');

let rootHandle = null;

const openFile = async (fileHandle) => {
  const file = await fileHandle.getFile();
  oTextArea.value = await file.text();
}

const openFolder = async (dirHandle) => {
  let handleIterator = null;

  if (dirHandle && dirHandle instanceof FileSystemDirectoryHandle) {
    rootHandle = dirHandle;
    handleIterator = await dirHandle.values();
  } else {
    rootHandle = await window.showDirectoryPicker();
    handleIterator = await rootHandle.values();
  }

  update(handleIterator);
}

const update = async (handleIterator) => {
  let items = [];

  for await (const handle of handleIterator) {
    items.push({
      name: handle.name,
      kind: handle.kind
    });
  }

  oList.innerHTML = items.map(item =>
    `<li onclick="onClickItem('${item.name}','${item.kind}')">
      ${item.name}${item.kind === 'directory' ? '（directory）' : ''}
    </li>`
  ).join('');
}

const onClickItem = async (name, kind) => {
  if (kind === 'file') {
    const fileHandle = await rootHandle.getFileHandle(name);
    openFile(fileHandle);
    return;
  }

  if (kind === 'directory') {
    const dirHandle = await rootHandle.getDirectoryHandle(name);
    openFolder(dirHandle);
    return;
  }
}

