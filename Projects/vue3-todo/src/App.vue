<template>
  <div class="container">
    <todo-input />
    <todo-list 
      :todoList="todoList"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { Store, useStore } from 'vuex';
import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue';
import { IUseTodo, useTodo } from './hooks';

export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();

    onMounted(() => {
      setTodoList();
    });

    return {
      todoList: computed(() => store.state.list)
    }
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 500px;
  margin: 20px auto 0;
  text-align: center;
}
</style>
