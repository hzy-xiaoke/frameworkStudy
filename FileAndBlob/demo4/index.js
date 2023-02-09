const oImage = document.querySelector('.container>.imgBox>img'); 
const oCanvas = document.querySelector('.container>canvas');
const context = oCanvas.getContext('2d');

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
}

const colorHandle = (imgData) => {
  for (let index = 0, i = 0; i < imgData.width; i++) {
    for (let j = 0; j < imgData.height; j++, index += 4) {
      const red = imgData.data[index];
      const green = imgData.data[index + 1];
      const blue = imgData.data[index + 2];

      const average = (red + green + blue) / 3;

      imgData.data[index] = average;
      imgData.data[index + 1] = average;
      imgData.data[index + 2] = average;
    }
  }
}

const onOpen = async () => {
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  const file = await fileHandle.getFile();
  const url = URL.createObjectURL(file);
  oImage.src = url;

  const image = new Image();
  image.width = 150;
  image.onload = () => {
    context.drawImage(image, 0, 0, 150, 150);
    const data = context.getImageData(0, 0, 150, 150);
    colorHandle(data);
    context.putImageData(data, 0, 0, 0, 0, data.width, data.height);
  }
  image.src = url;
}

const onSave = async () => {
  const fileHandle = await window.showSaveFilePicker(pickerOpts);
  const stream = await fileHandle.createWritable();
  oCanvas.toBlob(async (blob) => {
    if (!blob) {
      return;
    }
    await stream.write(blob);
    await stream.close();
  });
}