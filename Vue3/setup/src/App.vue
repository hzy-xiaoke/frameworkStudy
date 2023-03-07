<template>
  <Context 
    :title="title"
    :content="content"
    :count="count"
    @plus="plus"
  ></Context>
</template>

<script>
import { ref } from 'vue';
import Context from './components/Context.vue';

export default {
  name: 'App',
  components: {
   Context
  },
  setup() {
    const title = ref('默认标题');
    const content = ref('默认内容');
    const count = ref(0);

    const plus = (value) => {
      count.value += value;
    }

    setTimeout(() => {
      title.value = 'Vue3';
      content.value = '渐进式JavaScript 框架';
    }, 2000)

    return {
      title,
      content,
      count,
      plus
    }
  }
}
</script>

<style>

</style>
