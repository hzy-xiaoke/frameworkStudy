<template>
  <Child></Child>
</template>

<script>
import Child from './Child.vue';

export default {
  name: 'Father',
  components: {
    Child
  }
}
</script>

<style>

</style>