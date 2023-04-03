const onOpenFilePicker = async () => {
  const [fileHandle] = await window.showOpenFilePicker();
  console.log(fileHandle);

  const file = await fileHandle.getFile();
  console.log(file);

  const formData = new FormData();
  formData.append('file', file);
  formData.append('action', 'upload');

  upload(formData);
}

const upload = (payload) => {
  fetch('http://localhost:8888/upload', {
    method: 'POST',
    body: payload
  }).then(response => {
    console.log(response);
    return response.json();
  }).then(result => {
    console.log(result);
  })
}