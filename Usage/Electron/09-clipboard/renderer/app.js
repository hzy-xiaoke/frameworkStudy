const API = window.electronAPI;

const oContent = document.querySelector('#content');
const oPaste = document.querySelector('.paste');

document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.className === 'copy') {
    API.copy(target.previousElementSibling.innerText);
    oPaste.disabled = false;
  }

  if (target.className === 'paste') {
    oContent.value += API.show();
    oPaste.disabled = true;
  }
}, false);