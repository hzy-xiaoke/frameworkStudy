import { defineStore } from 'pinia'

const useCounterStore = defineStore('counterStore', {
  state() {
    return {
      count: 0
    }
  },
  actions: {
    increase() {
      this.count++;
    }
  }
})

export default useCounterStore