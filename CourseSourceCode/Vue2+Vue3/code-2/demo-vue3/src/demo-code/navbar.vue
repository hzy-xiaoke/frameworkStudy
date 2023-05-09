<template>
    <div class="navbar">
        <button @click="handleClick">left</button>
        <span>{{title}}</span>
        <button>right</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['title'],
  setup (props, { emit }) {
    const obj = reactive({
      title: props.title
    })

    const handleClick = () => {
      emit('event')
    }

    return {
      ...toRefs(obj),
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
    display: flex;
    justify-content: space-between;
}
</style>
