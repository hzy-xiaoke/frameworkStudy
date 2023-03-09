<template>
  <reactive-c></reactive-c>
  <hr />
  <ref-c></ref-c>
</template>

<script>
import ReactiveC from './components/ReactiveC.vue';
import RefC from './components/RefC.vue';

export default {
  name: 'App',
  components: {
    ReactiveC,
    RefC
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
