<script setup>
import SingleChat from './components/SingleChat.vue'
import SingleChatPlus from './components/SingleChatPlus.vue'
</script>

<template>
  <div class="box">
    <SingleChat />
    <SingleChatPlus />
  </div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
