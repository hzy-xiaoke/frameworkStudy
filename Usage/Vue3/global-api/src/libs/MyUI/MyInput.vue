<template>
  <input type="text" class="my-input" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入信息'
    }
  }
}
</script>

<style>
.my-input {
  padding: 5px;
  border: 1px solid orange;
  outline: none;
}
</style>