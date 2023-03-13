<template>
  <div 
    v-for="(item, index) of users"
    :key="item.id"
    :ref="el => { if(el) list[index] = el }"
  >
    {{ item.name }} - {{ item.age }}
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';

export default {
  name: 'TemplateRefC',
  setup() {
    const users = reactive([
      {
        id: 1,
        name: '张三',
        age: 20
      },
      {
        id: 2,
        name: '李四',
        age: 19
      },
      {
        id: 3,
        name: '王五',
        age: 18
      }
    ]);
    const list = ref([]);

    onMounted(() => {
      console.log(list.value);
    });

    return {
      users,
      list
    }
  }
}
</script>

<style>

</style>