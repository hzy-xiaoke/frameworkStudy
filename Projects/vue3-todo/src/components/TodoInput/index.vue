<template>
  <div class="input-wrapper">
    <input 
      type="search"
      v-model="todoValue"
      @keyup="setTodoValue"
    />
    <button @click="setTodoValue">添加事项</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IUseTodo, useTodo } from '../../hooks';

export default defineComponent({
  name: 'TodoInput',
  setup() {
    const todoValue = ref<string>('');
    const { setTodo }: IUseTodo = useTodo();

    const setTodoValue = (e: KeyboardEvent | PointerEvent): void => {
      if (e instanceof KeyboardEvent) {
        if (e.key !== 'Enter') {
          return;
        }
      } 

      if (todoValue.value.trim().length) {
        // 设置数据
        setTodo(todoValue.value);
        todoValue.value = '';
      }
    }
    
    return {
      todoValue,
      setTodoValue
    }
  }
});
</script>

<style>
.input-wrapper {
  width: 80%;
  margin: 0 auto;
  display: flex;
}
.input-wrapper > input {
  width: 80%;
  height: 35px;
  outline: none;
  padding: 10px;
}
.input-wrapper > button {
  width: 20%;
  height: 35px;
  background: orange;
  color: white;
  border: none;
}
.input-wrapper > button:hover {
  cursor: pointer;
  background: rgba(255, 166, 0, 0.8);
}
</style>