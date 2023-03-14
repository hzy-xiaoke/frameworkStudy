<template>
  <div class="wrapper">
    <todo-input />
    <todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  }
});
</script>

<style>

</style>
