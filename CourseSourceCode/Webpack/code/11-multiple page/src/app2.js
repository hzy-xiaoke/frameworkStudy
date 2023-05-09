import _ from 'lodash';

console.log('App Two');
console.log(_.join(['hello', 'webpack'], ','));

const a = document.createElement('a');
a.textContent = '跳转到应用1';
a.href = '/chanelOne';
document.body.appendChild(a);