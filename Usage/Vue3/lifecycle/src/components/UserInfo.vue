<template>
  <div>
    <span>{{ user.name }}</span>
    <button @click="remove(user.id)">删除</button>
  </div>
</template>

<script>
import {
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  name: 'UserInfo',
  props: {
    user: Object
  },
  emits: ['remove'],
  setup(props, ctx) {
    const remove = (id) => {
      ctx.emit('remove', id);
    }

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount:', props.user.id);
    })

    onUnmounted(() => {
      console.log('onUnmounted', props.user.id);
    })

    return {
      remove
    }
  }
}

</script>

<style>

</style>