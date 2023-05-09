<template>
  <div>
    <!-- 电影封面轮播区 -->
    <template v-if="filmCoverList">
      <film-swiper :key="filmCoverList.length" :loop="isLoop" :delay="delay">
        <film-swiper-item v-for="data in filmCoverList" :key="data.bannerId"
          class="filmSwiperItem">
          <img :src="data.imgUrl" alt="">
        </film-swiper-item>
      </film-swiper>
    </template>
    <!-- Tab栏 -->
    <tab class="tab"></tab>
    <router-view />
  </div>
</template>

<script>
import filmSwiper from '@/components/homes/FilmSwiper'
import filmSwiperItem from '@/components/homes/FilmSwiperItem'
import tab from '@/components/homes/Tab'
import http from '@/util/http'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    filmSwiper,
    filmSwiperItem,
    tab
  },
  data () {
    return {
      filmCoverList: [], // 电影封面列表
      isLoop: true, // 是否循环
      delay: 1500 // 延迟时长(多少秒切换下一张)
    }
  },
  mounted () {
    http({
      url: `/gateway?type=2&cityId=${this.$store.state.cityId}&k=1972866`,
      headers: {
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(result => {
      this.filmCoverList = result.data.data
      // 如果数据为空,则加载模拟数据
      if (result.data.data === null) {
        axios.get('./banner.json').then(result => {
          this.filmCoverList = result.data
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.filmSwiperItem{
  img{
    width: 100%;
  }
}
.tab{
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #eeeeee;
}
</style>
