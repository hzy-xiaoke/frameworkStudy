<template>
  <div class="swiper-container" :id="name">
    <div class="swiper-wrapper ">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  name: 'DetailSwiper',
  props: {
    viewNum: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: 'swiper'
    }
  },
  mounted () {
    new Swiper(`#${this.name}`, {
      slidesPerView: this.viewNum, // 同时显示的数量
      spaceBetween: 10, // 间距
      freeMode: true // 自由控制,即可随时停留
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
