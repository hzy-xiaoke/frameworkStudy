<template>
  <div class="header">
    <i class="iconfont icon-jiantou-copy" @click="handleBack"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 2.75rem;
  line-height: 2.125rem;
  text-align: center;
  background: transparent;
  color: transparent;
  transition: 0.25s;
  i {
    position: absolute;
    left: 5px;
    font-size: 20px;
    width: 2.125rem;
    height: 2.125rem;
    color: rgba(0, 0, 0, 0.6);
    background: rgba(184,209,210,0.7);
    border-radius: 50%;
    transition: 0.25s;
  }
}
.showHeader {
  background-color: white;
  color: black;
  border-bottom: 1px solid #eeeeee;
}
.showIcon {
  background: white !important;
}
</style>
