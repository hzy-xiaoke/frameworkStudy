<template>
  <footer>
    <!-- 声明式导航 -->
    <ul>
      <router-link to="/home" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myactive' : ''">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myactive' : ''">
          <i class="iconfont icon-faxian"></i>
          <span>影院</span>
        </li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myactive' : ''">
          <i class="iconfont icon-gerenzhongxin"></i>
          <span>我的</span>
        </li>
      </router-link>
    </ul>
  </footer>
</template>

<script>
import '@/assets/iconfont/iconfont.css'

export default {
  name: 'FooterBar'
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
}
ul {
  display: flex;
  align-items: center;
  background: white;
  border-top: 1px solid #eeeeee;
  height: 50px;
  li {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    i {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
  }
}
.myactive {
  color: red;
}
</style>
