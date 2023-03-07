<template>
  <div>{{ title }}</div>
</template>

<script>
import { ref, h } from 'vue';

export default {
  name: 'WithH',
  setup() {
    const title = ref('标题');

    return () => h('h1', [title.value]);
  }
}

</script>

<style>

</style>