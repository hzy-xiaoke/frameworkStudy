<template>
  <div>
    <section>
      <!-- 路由容器 -->
      <router-view />
    </section>
    <!-- 底部栏 -->
    <footer-bar v-show="$store.state.isShowFooterBar"></footer-bar>
  </div>
</template>

<script>
// @别名 指向src的绝对路径
import footerBar from '@/components/FooterBar'
// import axios from 'axios'
// import Vue from 'vue'
// 全局组件
// Vue.component("navbar",navbar)

// 指令
// Vue.directive('color', {
//   inserted (el, binding) {
//     el.style.background = 'lightgreen'
//   }
// })
export default {
  name: 'App',
  data () {
    return {
      mytext: '',
      datalist: [],
      isShow: true
    }
  },
  components: {
    footerBar
  },
  created () {
    console.log('App Created => isShowFooterBar =', this.$store.state.isShowFooterBar)
  }
}
</script>

<style lang="scss">
*{ margin: 0; padding: 0;}
ul{ list-style: none;}

section{
  padding-bottom: 3.125rem;
}
</style>
