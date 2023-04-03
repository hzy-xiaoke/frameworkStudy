import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import * as utils from './libs/utils.js';
import MyUI from './libs/MyUI';

const app = createApp(App);

console.log('app.config =>', app.config);

app.component('HelloWorld', HelloWorld);
const MyComponent = app.component('HelloWorld');
console.log('MyComponent =>', MyComponent);

app.config.globalProperties.utils = utils;

app.use(MyUI, {
  components: [
    'MyButton',
    'MyInput'
  ]
});

app.mount('#app');
