<template>
  <h1>{{ count }}</h1>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  name: 'WatchEffectC',
  setup() {
    const count = ref(0);

    setTimeout(() => {
      count.value = 1;
    }, 1000);

    setTimeout(() => {
      count.value = 2;
    }, 2000);

    const stop = watchEffect((onCleanup) => {
      console.log(count.value);

      onCleanup(() => {
        console.log('清理无效的副作用');
      });
    });

    setTimeout(() => {
      stop();
      console.log('副作用函数已停止');
    }, 1500);

    return {
      count
    }
  }
}
</script>

<style>

</style>