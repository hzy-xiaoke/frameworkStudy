<template>
  <Grandpa></Grandpa>
</template>

<script>
import { ref, provide } from 'vue';
import Grandpa from './components/Grandpa.vue';

export default {
  name: 'App',
  components: {
    Grandpa
  },
  setup() {
    const name = ref('张三');

    provide('childName', name);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
