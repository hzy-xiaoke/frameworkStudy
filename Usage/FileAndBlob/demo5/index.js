let oTextArea = document.querySelector('.container>textarea');
let oLink = document.querySelector('.container>a');

const toBlobUrl = (blob) => {
  return URL.createObjectURL(blob);
}

const toDataUrl = (blob) => {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.readAsDataURL(blob);
  })
}

const onFetch = (fileType, urlType) => {
  let fetchUrl = '';
  
  switch (fileType) {
    case 'text':
      fetchUrl = 'public/1.txt';
      break;
    case 'image':
      fetchUrl = 'public/1.jpg';
      break;
    default:
      fetchUrl = 'index.html';
  }

  fetch(fetchUrl)
    .then(response => {
      return response.blob();
    })
    .then(async (result) => {
      console.log(result);

      if (urlType === 'blob url') {
        let blobUrl = toBlobUrl(result);
        oTextArea.value = blobUrl;
        oLink.href = blobUrl;
        console.log('blob url =>', blobUrl);
        return;
      } 

      if (urlType === 'data url') {
        let dataUrl = await toDataUrl(result);
        oTextArea.value = dataUrl;
        oLink.href = dataUrl;
        console.log('data url =>', dataUrl);
        return;
      }
    })
}
