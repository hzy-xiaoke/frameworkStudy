<template>
    <div class="swiper-container">
        <div class="swiper-wrapper ">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  name: 'FilmSwiper',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 2000
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      loop: this.loop, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 自动播放
      autoplay: {
        delay: this.delay,
        disableOnInteraction: false
      }

    })
  }
}
</script>

<style lang="scss" scoped>
    .swiper-container{
        height: 13.125rem;
    }
</style>
