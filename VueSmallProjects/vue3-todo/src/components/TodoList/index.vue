<template>
  <div>
    <h1>TodoList</h1>
    <todo-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './item.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem
  }
});
</script>

<style>

</style>