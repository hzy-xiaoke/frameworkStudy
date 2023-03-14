<template>
  <h2>{{ name }}</h2>
  <button @click="changeName">改变名称</button>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Child',
  setup() {
    const {
      childName: name, 
      changeName
    } = inject('childName');

    return {
      name,
      changeName
    }
  }
}
</script>

<style>

</style>