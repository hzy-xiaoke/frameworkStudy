<template>
  <h2>{{ name }}</h2>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Child',
  setup() {
    const name = inject('childName', '默认名字');

    return {
      name
    }
  }
}
</script>

<style>

</style>