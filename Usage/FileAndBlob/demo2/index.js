// Input
const changeHandle = async (e) => {
  console.log(e.target.files);
  console.log(e.target.files[0]);
  console.log(await e.target.files[0].arrayBuffer());
}

// Drag
const dragoverHandle = (e) => {
  e.preventDefault();
}

const dropHandle = async (e) => {
  e.preventDefault();

  console.log(e.dataTransfer.files);
  console.log(e.dataTransfer.files[0]);
  console.log(await e.dataTransfer.files[0].arrayBuffer());
}

// window.showOpenFilePicker
const filePickerHandle = async () => {
  const pickerOpts = {
    types: [
      {
        description: 'images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg']
        }
      }
    ],
    excludeAcceptAllOption: true,
    multiple: false
  };

  const [ fileHandle ] = await window.showOpenFilePicker(pickerOpts);
  console.log(fileHandle);

  const file = await fileHandle.getFile();
  console.log(file);
  console.log(await file.arrayBuffer());
}

// Fetch
const fetchHandle = (type) => {
  let url = '';

  switch(type) {
    case 'JPG':
      url = 'public/1.jpg';
      break;
    case 'JSON':
      url = 'public/data.json';
      break;
    default:
      url = 'index.html';
  }

  fetch(url)
    .then((response) => {
      console.log(response);
      return response.blob();
    })
    .then(async (result) => {
      console.log(result);
      console.log(await result.text());
      console.log(await result.arrayBuffer());
    })
}