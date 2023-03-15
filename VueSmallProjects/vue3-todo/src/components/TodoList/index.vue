<template>
  <div class="todo-list-wrapper">
    <div
      class="nothing"
      v-if="todoList.length === 0"
    >暂无代办事项</div>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import { IUseTodo, useTodo } from '@/hooks';
import { ITodo } from '@/typings';
import { defineComponent, PropType } from 'vue';
import TodoItem from './item.vue';

export default defineComponent({
  name: 'TodoList',
  props: {
    todoList: Array as PropType<ITodo[]>
  },
  components: {
    TodoItem
  },
  setup() {
    const {
      removeTodo,
      setStatus,
      setDoing
    }: IUseTodo = useTodo();

    return {
      removeTodo,
      setStatus,
      setDoing
    }
  }
});
</script>

<style>
.todo-list-wrapper {
  width: calc(80% - 2px);
  margin: 1px auto;
  border: 1px solid orange;
  border-bottom: none;
}
.nothing {
  padding: 25px 0;
  border-bottom: 1px solid orange;
}
</style>