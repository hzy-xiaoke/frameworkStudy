<template>
  <h2>{{ attrs.title }}</h2>
  <p>{{ attrs.content }}</p>
  <div>
    <button @click="handleClick">count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'Context',
  emits: ['plus'],
  props: {
    count: Number
  },
  setup(props, context) {
    console.log(context.attrs);
    console.log(context.slots);
    console.log(context.emit);
    console.log(context.expose);

    const handleClick = () => {
      context.emit('plus', 1);
    }
      
    return {
      attrs: context.attrs,
      handleClick
    }
  }
}
</script>

<style>

</style>