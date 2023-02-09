// new Blob/File
const newHandle = () => {
  let blob = new Blob(['123456']);
  console.log(blob);

  let file = new File(['123456'], '123.txt');
  console.log(file);
}

// ArrayBuffer
const arrayBufferHandle = async () => {
  let blob = new Blob(['123456']);
  console.log(await blob.arrayBuffer());

  let file = new File(['123456'], '123.txt');
  console.log(await file.arrayBuffer());
}

// FileReader
const fileReaderHandle = () => {
  let blob = new Blob(['123456']);

  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    console.log(fileReader.result);
    console.log(e.target.result);
    console.log(fileReader.result === e.target.result);
  }
  fileReader.readAsArrayBuffer(blob);
}

// DataView
const dataViewHandle = async () => {
  let blob = new Blob(['123456']);
  let buffer = await blob.arrayBuffer();
  let view = new DataView(buffer);

  console.log(view);
  console.log(view.getUint8(1));
  
  view.setUint8(1, 65);
}