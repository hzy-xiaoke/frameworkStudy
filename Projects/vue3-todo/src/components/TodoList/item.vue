<template>
  <div 
    class="todo-item-wrapper"
    :class="item.status === DOING ? 'active' : ''"
    >
    <div class="item-status">
      <input 
        type="checkbox"
        :checked="item.status === FINISHED"
        @click="setStatus(item.id)"
      />
    </div>
    <div class="item-content">
      <span
        :class="item.status === FINISHED ? 'line-through' : ''"
      >
        {{ item.content }} 
      </span>
    </div>
    <div class="operation">
      <button 
        v-if="item.status !== FINISHED"
        @click="setDoing(item.id)"
        :class="item.status === DOING ? 'doing' : 'willdo'"
      >
        {{ item.status === DOING ? '正在进行' : '马上行动' }}
      </button>
      <button
        class="btn-delete"
        @click="removeTodo(item.id)"
      >删除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ITodo, TODO_STATUS } from "@/typings";
import { defineComponent, PropType } from "vue";

interface IStatusState {
  WILLDO: TODO_STATUS
  DOING: TODO_STATUS,
  FINISHED: TODO_STATUS
}

export default defineComponent({
  name: 'TodoItem',
  emits: ['removeTodo', 'setStatus', 'setDoing'],
  props: {
    item: Object as PropType<ITodo>
  },
  setup(props, { emit }) {
    const statusState = <IStatusState>{
      WILLDO: TODO_STATUS.WILLDO,
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED
    }

    const setStatus = (id: number): void => {
      emit('setStatus', id);
    }

    const removeTodo = (id: number): void => {
      emit('removeTodo', id);
    }

    const setDoing = (id: number): void => {
      emit('setDoing', id);
    }

    return {
      ...statusState,
      setStatus,
      removeTodo,
      setDoing
    }
  }
});
</script>

<style>
.todo-item-wrapper {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 1px solid orange;
  display: flex;
}
.todo-item-wrapper > .item-content {
  width: 60%;
  text-align: left;
  padding: 0 10px;
}
.todo-item-wrapper > .operation {
  flex: 1;
}
.todo-item-wrapper > .operation > button {
  padding: 3px 8px;
  cursor: pointer;
  border: none;
}
.todo-item-wrapper.active {
  background: orange;
  color: white;
}

.line-through {
  text-decoration: line-through;
}
.doing {
  background: #cdcdcd;
  color: white;
}
.doing:hover {
  background: rgba(205, 205, 205, 0.8);
}
.willdo {
  background: orange;
  color: white;
}
.willdo:hover {
  background: rgba(255, 166, 0, 0.8);
}
.btn-delete {
  background: rgba(255, 0, 0, 0.8);
  color: white;
}
.btn-delete:hover {
  background: rgba(255, 0, 0, 0.6);
}
</style>