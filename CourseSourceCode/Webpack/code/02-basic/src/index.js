import helloWorld from './hello-world';
import imgSrc from './assets/container.jpg';
import logoSvg from './assets/logo.svg';
import messageText from './assets/message.txt';
import pngSrc from './assets/bg.png';
import './style.css';
import './style.less';

helloWorld();

const img = document.createElement('img');
img.src = imgSrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.style.cssText = 'width: 500px; height: 300px;';
img2.src = logoSvg;
document.body.appendChild(img2);

const block = document.createElement('div');
block.style.cssText = 'width: 200px; height: 200px;';
block.className = 'container';
block.textContent = messageText;
document.body.appendChild(block);

const img3 = document.createElement('img');
img3.style.cssText = 'width: 500px; height: 300px;';
img3.src = pngSrc;
document.body.appendChild(img3);