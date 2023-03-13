<template>
  <div>
    <p>count: {{ count }}</p>
    <p>state.count: {{ state.count }}</p>
    <button @click="changeCount">count</button>
    <button @click="changeState">state.count</button>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  isRef,
  unref
} from 'vue';

export default {
  name: 'RefC',
  setup() {
    const count = ref(0);
    const state = reactive({
      count
    });

    const changeCount = () => {
      count.value += 1;
    }

    const changeState = () => {
      state.count += 1;
    }

    const commonObj = {
      name: '张三',
      age: 20
    };
    console.log(isRef(commonObj) ? commonObj.value : commonObj);
    console.log(unref(commonObj));

    const refObj = ref({
      name: '张三',
      age: 20
    });
    console.log(isRef(refObj) ? refObj.value : refObj);
    console.log(unref(refObj));
    
    return {
      count,
      state,
      changeCount,
      changeState
    }
  }
}
</script>

<style>

</style>