<template>
  <reactive-c></reactive-c>
</template>

<script>
import { reactive } from 'vue';
import ReactiveC from './components/ReactiveC.vue';

export default {
  name: 'App',
  components: {
    ReactiveC
  },
  setup() {
    
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
