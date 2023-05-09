<template>
  <div>
    <!-- 实现方法一 -->
    <!-- <ul class="list">
      <li v-for="data in datalist" :key="data.filmId"
      @click="handleClick(data.filmId)" class="listItem">
          <img :src="data.poster" alt="">
          <div class="textInfo">
            <h4>{{data.name}} <span class="type">{{data.filmType.name}}</span></h4>
            <p>观众评分
              <span v-if="data.grade"> {{data.grade}}</span>
              <span v-else> 暂无</span>
            </p>
            <p>
              主演：<span v-for="(actor,index) in data.actors" :key="index">
                {{actor.name}}
              </span>
            </p>
            <p>{{data.nation}} | {{data.runtime}}分钟</p>
          </div>
          <button>购票</button>
      </li>
    </ul> -->
    <!-- 实现方法二,使用vant组件库 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的o(*￣▽￣*)o"
      @load="onLoad"
      :immediate-check="false"
      class="list">
      <van-cell v-for="data in datalist" :key="data.filmId"
        style="padding:0; line-height: 130%;">
        <div class="listItem" @click="handleClick(data.filmId)">
          <img :src="data.poster" alt="">
          <div class="textInfo">
            <h4>{{data.name}} <span class="type">{{data.filmType.name}}</span></h4>
            <p>观众评分
              <span v-if="data.grade"> {{data.grade}}</span>
              <span v-else> 暂无</span>
            </p>
            <p>
              主演：<span v-for="(actor,index) in data.actors" :key="index">{{actor.name}} </span>
            </p>
            <p>{{data.nation}} | {{data.runtime}}分钟</p>
          </div>
          <button>购票</button>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from '@/util/http'

export default {
  name: 'NowPlaying',
  data () {
    return {
      datalist: [],
      pageNum: 1,
      isEnd: false, // 实现方法一的相关状态
      loading: false,
      finished: false,
      total: 0
    }
  },
  methods: {
    handleClick (id) {
      // 编程式导航
      // 访问指定的路由
      // 方法1: 通过路径跳转
      // this.$router.push(`/detail/${id}`)

      // 方法2: 通过命名路由跳转
      this.$router.push({
        name: 'filmdetail',
        params: {
          id: id
        }
      })
    },
    // 实现方法一依赖的方法
    // scrollChange () {
    //   var contentHeight = document.documentElement.scrollHeight
    //   var scrollTop = document.documentElement.scrollTop
    //   var clientHeight = document.documentElement.clientHeight
    //   // console.log('contentHeight - scrollTop',contentHeight - scrollTop)
    //   // console.log('clientHeight',clientHeight)
    //   if (Math.floor(contentHeight - scrollTop) <= clientHeight && !this.isEnd) {
    //     http({
    //       url: `/gateway?cityId=350100&pageNum=${this.pageNum++}&pageSize=10&type=1&k=1003549`,
    //       headers: {
    //         'X-Host': 'mall.film-ticket.film.list'
    //       }
    //     }).then(result => {
    //       if (this.datalist.length >= result.data.data.total) {
    //         this.isEnd = true
    //       }
    //       this.datalist = this.datalist.concat(result.data.data.films)
    //     })
    //   }
    // },
    onLoad () {
      // 如果总数为0,即mounted中的第一次请求未完成,则不执行onLoad
      if (this.total === 0) {
        this.loading = false
        return
      }
      // 如果已加载记录数等于总数,则记录全部加载完成,不执行onLoad
      if (this.datalist.length === this.total) {
        this.finished = true
        return
      }
      console.log('onload', this.total, this.datalist.length)
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.pageNum++}&pageSize=10&type=1&k=1003549`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(result => {
        console.log(result.data)
        // 加载状态结束
        this.loading = false
        this.datalist = this.datalist.concat(result.data.data.films)
      })
    }
  },
  mounted () {
    // 获取数据并渲染
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.pageNum++}&pageSize=10&type=1&k=1003549`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(result => {
      console.log(result.data)
      this.datalist = result.data.data.films
      this.total = result.data.data.total
      // 无数据时,显示完成全部加载的提示
      if (result.data.data.total === 0) {
        this.finished = true
      }
    })

    // 给窗口添加滚动监听事件(实现方法一相关事件)
    // window.onscroll = () => {
    //   this.scrollChange()
    // }
  }
}
</script>

<style lang="scss" scoped>
.list{
  display: block;
  background: white;
  font-size: 16px;
  .listItem{
    position: relative;
    display: flex;
    padding: 15px 15px 15px 5px;
    align-items: center;
    // border-bottom: 1px solid #eeeeee;
    img{
      width: 66px;
      margin: 10px;
    }
    .textInfo{
      width: 13.125rem;
      h4{
        width: 11.875rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: normal;
        .type{
          display: inline-block;
          font-size: 12px;
          line-height: 16px;
          background: #D2D6DC;
          color: white;
          padding: 0 2px;
          margin-left: 3px;
          border-radius: 2px;
        }
      }
      p{
        font-size: 13px;
        margin: 5px 0;
        color: rgba(0,0,0,0.6);
      }
      p:nth-of-type(1){
        span:last-of-type{
          color: orange;
        }
      }
      p:nth-of-type(2){
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    button{
      position: absolute;
      right: 15px;
      width: 50px;
      height: 30px;
      outline: none;
      border: none;
      border: 1px solid orange;
      background: white;
      color: orange;
    }
  }
}
</style>
