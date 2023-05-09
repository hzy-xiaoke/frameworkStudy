import _ from 'lodash';

console.log('App One');
console.log(_.join(['hello', 'webpack'], ' '));

const a = document.createElement('a');
a.textContent = '跳转到应用2';
a.href = '/chanelTwo';
document.body.appendChild(a);
