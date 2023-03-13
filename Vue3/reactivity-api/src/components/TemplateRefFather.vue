<template>
  <template-ref-child ref="child"></template-ref-child>
  <button @click="changeName">改变名称</button>
</template>

<script>
import { ref } from 'vue';
import TemplateRefChild from './TemplateRefChild.vue';

export default {
  name: 'TemplateRefFater',
  components: {
    TemplateRefChild
  },
  setup() {
    const child = ref(null);

    const changeName = () => {
      child.value.changeName();
    }

    return {
      child,
      changeName
    }
  }
}
</script>

<style>

</style>