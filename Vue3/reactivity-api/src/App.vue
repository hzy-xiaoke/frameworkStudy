<template>
  <watch-mul-c></watch-mul-c>
</template>

<script>
import ReactiveC from './components/ReactiveC.vue';
import RefC from './components/RefC.vue';
import WatchEffectC from './components/WatchEffectC.vue';
import WatchC from './components/WatchC.vue';
import WatchMulC from './components/WatchMulC.vue';

export default {
  name: 'App',
  components: {
    ReactiveC,
    RefC,
    WatchEffectC,
    WatchC,
    WatchMulC
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
