<script setup>
  import { storeToRefs } from 'pinia'
  import useCounterStore from '../store/counterStore'

  const couterStore = useCounterStore()
  const { count } = storeToRefs(couterStore)
  const increase = couterStore.increase
</script>

<template>
  <div>
    Counter:
    <button @click="increase">count: {{ count }}</button>
  </div>
</template>

<style scoped>

</style>
