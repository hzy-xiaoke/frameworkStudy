const API = window.electronAPI;

const oCaptureImage = document.querySelector('#captureImage');
const oImageContainer = document.querySelector('.imageContainer');
const oCaptureVideo = document.querySelector('#captureVideo');
const oVideoContainer = document.querySelector('.videoContainer');

oCaptureImage.addEventListener('click', async () => {
  const sources = await API.captureImage();
  oImageContainer.innerHTML = '';
  for (const source of sources) {
    const image = new Image();
    image.src = source.dataURL;
    image.alt = source.name;
    oImageContainer.appendChild(image);
  }
}, false);

oCaptureVideo.addEventListener('click', async () => {
  const sources = await API.captureVideo();
  const sourceId = sources[0].sourceId;
  
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          minWidth: 1280,
          maxWidth: 1280,
          minHeight: 720,
          maxHeight: 720
        }
      }
    });
    handleStream(stream);
  } catch (e) {
    handleError(e);
  }
}, false);

function handleStream (stream) {
  const oVideo = document.createElement('video');
  oVideo.srcObject = stream;
  oVideo.onloadedmetadata = (e) => {
    oVideoContainer.innerHTML = '';
    oVideoContainer.appendChild(oVideo);
    oVideo.play();
  };
}

function handleError (e) {
  console.log(e);
}