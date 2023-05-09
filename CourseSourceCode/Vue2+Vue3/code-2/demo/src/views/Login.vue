<template>
  <div class="container">
    <van-button type="primary" @click="handleLogin">一键登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin () {
      // 设置token
      localStorage.setItem('token', 'token-value')
      // 如果有重定向相关参数值
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      } else {
        this.$router.push('/center')
      }
    }
  }
}
</script>

<style scoped>
.container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
