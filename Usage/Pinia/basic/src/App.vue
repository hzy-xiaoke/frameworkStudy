<script setup>
  import { storeToRefs } from 'pinia'
  import Counter from './components/Counter.vue'
  import useCounterStore from './store/counterStore'
  
  const counterStore = useCounterStore()
  const { count } = storeToRefs(counterStore)
  const increase = counterStore.increase
</script>

<template>
  <div>
    App: 
    <button @click="increase">count: {{ count }}</button>
    <Counter />
  </div>
</template>

<style scoped>

</style>
