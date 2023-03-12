<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'WatchMulC',
  setup() {
    const title = ref('默认标题');
    const content = ref('默认内容');

    setTimeout(() => {
      title.value = 'Vue3';
    }, 1000);

    setTimeout(() => {
      content.value = '渐进式 JavaScript 框架';
    }, 2000);

    // watch(title, (newValue, oldValue) => {
    //   console.log('watch title =>', newValue, oldValue);
    // }, {
    //   immediate: true
    // });

    // watch(content, (newValue, oldValue) => {
    //   console.log('watch content =>', newValue, oldValue);
    // }, {
    //   immediate: true
    // });

    watch([title, content], ([newTitle, newContent], [oldTitle, oldContent]) => {
      console.log('watch title&content =>', [newTitle, oldTitle], [newContent, oldContent]);
    }, {
      immediate: true
    });

    return {
      title,
      content
    }
  }
}
</script>

<style>

</style>