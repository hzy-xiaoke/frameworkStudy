<template>
  <div>
    <div class="header">
      <van-nav-bar title="影院" ref="navbar" @click-left="handleCity"
        @click-right="handleSearch">
        <template #left>
          <span>{{cityName}}</span>&nbsp;
          <van-icon name="arrow-down" size="10" color="black"/>
        </template>
        <template #right>
          <van-icon name="search" size="20" color="black"/>
        </template>
      </van-nav-bar>
    </div>
    <div
      class="box"
      :style="{
        height: height,
      }"
    >
      <ul>
        <li v-for="cinemas in cinemasList" :key="cinemas.cinemasId">
          <div class="left">
            <h4>{{ cinemas.name }}</h4>
            <p>{{ cinemas.address }}</p>
          </div>
          <div class="right">
            <p class="price">
              ￥<span>{{ cinemas.lowPrice / 100 }}</span
              >起
            </p>
            <p class="distance">距离未知</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Cinemas',
  data () {
    return {
      height: '0px'
    }
  },
  computed: {
    ...mapState(['cityId', 'cityName', 'cinemasList'])
  },
  mounted () {
    // 动态计算高度
    this.height =
        document.documentElement.clientHeight -
        this.$refs.navbar.$el.offsetHeight -
        document.querySelector('footer').offsetHeight + 'px'

    if (this.cinemasList.length === 0) {
      this.getCinemasList(this.cityId)
        .then(() => {
          this.$nextTick(() => {
            new BetterScroll('.box', {
              scrollbar: {
                fade: true // 未操作时滚动条是否隐藏
              }
            })
          })
        })
    } else {
      this.$nextTick(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },
  methods: {
    ...mapMutations(['changeCityId', 'changeCityName', 'changeCinemasList']),
    ...mapActions(['getCinemasList']),
    handleCity () {
      this.$router.push('/city')
    },
    handleSearch () {
      this.$router.push('/cinemas/search')
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  position:sticky;
  top: 0;
  z-index: 100;
}
.box {
  // height: 200px;
  overflow: hidden;
  //解决betterScroll滚动条位置问题
  position: relative;
}
li {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  background: white;
  &:first-of-type{
    border-top: 1px solid #eeeeee;
  }
  .left {
    width: 80%;
    h4 {
      font-weight: normal;
      font-size: 15px;
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      font-size: 12px;
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 5px;
      color: gray;
    }
  }
  .right {
    width: 70px;
    text-align: center;
    font-size: 12px;
    .price {
      color: red;
      span {
        font-size: 15px;
      }
    }
    .distance {
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
      margin-top: 5px;
    }
  }
}
</style>
