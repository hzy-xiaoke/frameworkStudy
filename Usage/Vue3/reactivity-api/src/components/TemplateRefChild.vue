<template>
  <h2 ref="name">张三</h2>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'TemplateRefChild',
  setup() {
    const name = ref(null);

    onMounted(() => {
      console.log(name.value);
    });

    const changeName = () => {
      name.value.innerText = '李四';
    }

    return {
      name,
      changeName
    }
  }
}
</script>

<style>

</style>