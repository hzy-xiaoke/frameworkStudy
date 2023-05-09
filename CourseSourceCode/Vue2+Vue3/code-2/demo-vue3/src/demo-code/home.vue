<template>
    <div>
        home
        <navbar :title="title" @event="changeState"></navbar>
        <sidebar v-show="isShow"></sidebar>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import navbar from './navbar'
import sidebar from './sidebar'
export default {
  components: {
    navbar,
    sidebar
  },
  setup () {
    const obj = reactive({
      isShow: true,
      title: '影院'
    })

    const changeState = () => {
      obj.isShow = !obj.isShow
    }

    return {
      ...toRefs(obj),
      changeState
    }
  }
}
</script>
