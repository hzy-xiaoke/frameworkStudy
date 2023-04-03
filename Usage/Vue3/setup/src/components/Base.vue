<template>
  <div>{{ name }}</div>
  <div>{{ state.name }} - {{ state.age }}</div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'Base',
  setup() {
    console.log('setup');

    const name = ref('wangwu');
    const state = reactive({
      name: 'zhangsan',
      age: '20'
    });

    console.log(name);
    console.log(name.value);

    return {
      name,
      state
    }
  }
}
</script>

<style>

</style>
