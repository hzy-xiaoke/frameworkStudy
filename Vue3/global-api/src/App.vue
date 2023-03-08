<template>
  <HelloWorld msg="Welcome to Vue.js App"/>
  <hr />
  <my-button>自定义按钮</my-button>
  <br /><br />
  <my-input placeholder="请输入用户名"></my-input>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
