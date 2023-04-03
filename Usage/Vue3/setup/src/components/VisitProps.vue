<template>
  <h2>{{ title }}</h2>
</template>

<script>
import { watchEffect, watch, toRefs } from 'vue';

export default {
  name: 'VisitProps',
  props: {
    title: {
      type: String,
      default: '默认标题'
    }
  },
  // setup(props) {
  //   watchEffect(() => {
  //     console.log('watchEffect =>', props.title);
  //   })

  //   watch(() => props.title, (newValue, oldValue) => {
  //     console.log('watch =>', newValue, oldValue);
  //   })
  // }
  setup(props) {
    const { title } = toRefs(props); 

    watchEffect(() => {
      console.log('watchEffect =>', title.value);
    })

    watch(() => props.title, (newValue, oldValue) => {
      console.log('watch =>', newValue, oldValue);
    })
  }
}

</script>

<style>

</style>