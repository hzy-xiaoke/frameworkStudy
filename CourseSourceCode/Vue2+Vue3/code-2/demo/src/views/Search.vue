<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入影院名称或地址"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul v-if="value">
      <li v-for="cinemas in computedCinemasList" :key="cinemas.cinemasId">
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
</template>

<script>
import { mapState } from 'vuex'
import mixinsObj from '@/util/mixinsObj'

export default {
  name: 'Search',
  mixins: [mixinsObj],
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState(['cityId', 'cityName', 'cinemasList']),
    computedCinemasList () {
      return this.cinemasList.filter(item => {
        return item.name.toUpperCase().includes(this.value.toUpperCase()) ||
               item.address.toUpperCase().includes(this.value.toUpperCase())
      })
    }
  },
  methods: {
    onSearch () {

    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
form{
  position: sticky;
  top: 0;
}
li {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
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
li:last-of-type{
    border-bottom: none;
}
</style>
