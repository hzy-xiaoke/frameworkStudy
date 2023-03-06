import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

const app = createApp(App);

app.component('HelloWorld', HelloWorld);

const MyCompoent = app.component('HelloWorld');

console.log(MyCompoent);

app.mount('#app');
