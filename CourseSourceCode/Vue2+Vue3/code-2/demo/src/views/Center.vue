<template>
  <div>
    <van-nav-bar
      title="我的"
      right-text="退出登录"
      @click-right="handleLogout"
    />
  </div>
</template>

<script>
export default {
  name: 'Center',
  methods: {
    handleLogout () {
      // 移除本地存储中的token
      localStorage.removeItem('token')
      // 调转到登录
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
