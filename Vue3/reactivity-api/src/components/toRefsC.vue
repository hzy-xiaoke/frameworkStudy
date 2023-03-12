<template>
  <div>
    <p>state: {{ state.name }}</p>
    <p>stateRefs: {{ name }}</p>
    <button @click="changeState">改变state</button>
    <button @click="changeStateRefs">改变stateRefs</button>
  </div>
</template>

<script>
import { reactive, toRefs, isReactive, isRef, isProxy } from 'vue';

export default {
  name: 'ToRefsC',
  setup() {
    const state = reactive({
      name: '张三',
      age: 20
    });

    const stateRefs = toRefs(state);
    
    console.log('state', {
      source: state,
      isReactive: isReactive(state),
      isRef: isRef(state),
      isProxy: isProxy(state)
    });

    console.log('stateRefs', {
      source: stateRefs,
      isReactive: isReactive(stateRefs),
      isRef: isRef(stateRefs),
      isProxy: isProxy(stateRefs)
    });

    console.log('stateRefs.name', {
      source: stateRefs.name,
      isReactive: isReactive(stateRefs.name),
      isRef: isRef(stateRefs.name),
      isProxy: isProxy(stateRefs.name)
    });

    const changeState = () => {
      state.name = '李四';
    }

    const changeStateRefs = () => {
      stateRefs.name.value = '王五';
    }

    return {
      state,
      ...stateRefs,
      changeState,
      changeStateRefs
    }
  }
}
</script>

<style>

</style>