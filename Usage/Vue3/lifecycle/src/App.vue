<template>
  <h1>{{ count }}</h1>
  <hr>
  <user-info 
    v-for="user in users"
    :key="user.id"
    :user="user"
    @remove=remove
  />
</template>

<script>
import {
  ref,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered
} from 'vue';
import UserInfo from './components/UserInfo';

export default {
  name: 'App',
  components: {
    UserInfo
  },
  setup(props, ctx) {
    console.log('setup');
    const count = ref(0);
    const users = ref([
      {
        id: 1,
        name: 'zhangsan'
      },
      {
        id: 2,
        name: 'lisi'
      },
      {
        id: 3,
        name: 'wangwu'
      }
    ]);

    // setTimeout(() => {
    //   count.value = 1;
    // }, 2000);

    onBeforeMount(() => {
      console.log('onBeforeMount');
    })

    onMounted(() => {
      console.log('onMounted');
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })

    onUpdated(() => {
      console.log('onUpdate');
    })

    watchEffect(() => {
      const a = count.value;
      console.log('watchEffect');
    }, {
      flush: 'post'
    })

    const remove = (id) => {
      users.value = users.value.filter(user => user.id !== id);
    }

    onErrorCaptured((e) => {
      console.log(e);
    })

    onRenderTracked(() => {
      // debugger;
    })

    onRenderTriggered(() => {
      // debugger;
    })

    return {
      count,
      users,
      remove
    }
  }
}
</script>

<style>

</style>
