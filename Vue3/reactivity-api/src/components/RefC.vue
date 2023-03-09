<template>
  <div>
    <h2>{{ count }}-{{ state.count }}</h2>
    <button @click="plusOne">count</button>
    <button @click="plusTwo">state.count</button>
  </div>
</template>

<script>
import {
  ref,
  reactive
} from 'vue';

export default {
  name: 'RefC',
  setup() {
    const count = ref(0);
    const state = reactive({
      count
    });

    const plusOne = () => {
      count.value += 1;
    }

    const plusTwo = () => {
      state.count += 1;
    }

    return {
      count,
      state,
      plusOne,
      plusTwo
    }
  }
}
</script>

<style>

</style>