<template>
  <div>
    <p>state: {{ state.name }}</p>
    <p>nameRef: {{ nameRef }}</p>
    <button @click="changeState">改变state</button>
    <button @click="changeNameRef">改变nameRef</button>
  </div>
</template>

<script>
import { reactive, toRef, isReactive, isRef } from 'vue'; 

export default {
  name: 'toRefC',
  setup() {
    const state = reactive({
      name: '张三',
      age: 20
    });

    const nameRef = toRef(state, 'name');

    console.log('state', {
      isReactive: isReactive(state),
      isRef: isRef(state),
    });

    console.log('nameRef', {
      isReactive: isReactive(nameRef),
      isRef: isRef(nameRef),
    });

    const changeState = () => {
      state.name = '李四'; 
    }

    const changeNameRef = () => {
      nameRef.value = '王五';
    }

    return {
      state,
      nameRef,
      changeState,
      changeNameRef
    }
  }
}
</script>

<style>

</style>