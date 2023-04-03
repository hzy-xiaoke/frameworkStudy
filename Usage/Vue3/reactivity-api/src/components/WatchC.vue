<template>
  <h1>{{ count }}</h1>
</template>

<script>
import { ref, watch, onBeforeUpdate, onUpdated } from 'vue';

export default {
  name: 'WatchC',
  setup() {
    const count = ref(0);

    setTimeout(() => {
      count.value += 1;
    }, 1000);

    setTimeout(() => {
      count.value += 1;
    }, 2000);

    const stop = watch(count, (newValue, oldValue, onCleanup) => {
      console.log('watch =>', newValue, oldValue);

      onCleanup(() => {
        console.log('清理无效的副作用');
      });
    }, {
      immediate: true,
      deep: false,
      flush: 'post',
      onTrack(e) {
        console.log('onTrack', e);
      },
      onTrigger(e) {
        console.log('onTrigger', e);
      }
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    setTimeout(() => {
      stop();
    }, 1500);

    return {
      count
    }
  }
}
</script>

<style>

</style>