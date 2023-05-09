<template>
  <div v-if="filmInfo">
    <detail-header v-scroll="40">
      {{filmInfo.name}}
    </detail-header>
    <div class="imgBox">
      <img :src="filmInfo.poster" alt="">
    </div>
    <div class="filmInfos">
      <div>
        <h4>{{filmInfo.name}} <span>{{filmInfo.filmType.name}}</span></h4>
        <span v-if="filmInfo.grade"><i>{{filmInfo.grade}}</i>分</span>
      </div>
      <p>{{handleCategory(filmInfo.category)}}</p>
      <p><span>{{handleTime(filmInfo.premiereAt)}}</span>上映</p>
      <p>{{filmInfo.nation}} | <span>{{filmInfo.runtime}}</span>分钟</p>
      <p class="filmMemo" :class="isHidden?'isHidden':''">
        {{filmInfo.synopsis}}
      </p>
      <p>
        <i class="iconfont" @click="isHidden = !isHidden"
        :class="isHidden?'icon-jiantou1':'icon-jiantou'"></i>
      </p>
    </div>
    <hr>
    <!-- 演职人员模块 实现方法一 -->
    <!-- <div class="actorInfos">
      <h4>演职人员</h4>
      <div class="actorInfo">
        <div v-for="(actor,index) in filmInfo.actors" :key="index" class="actorItem">
          <img :src="actor.avatarAddress" alt="">
          <p>
            <span>{{actor.name}}</span>
            <span>{{actor.role}}</span>
          </p>
        </div>
      </div>
    </div> -->
    <!-- 实现方法二，使用swiper插件 -->
    <div class="actorInfos">
        <h4>演职人员</h4>
        <detail-swiper class="actorInfo" :viewNum="3.8" name="actors">
          <detail-swiper-item v-for="(actor,index) in filmInfo.actors" :key="index" class="actorItem">
            <img :src="actor.avatarAddress" @click="handlePreview(actorPhotos,index)">
            <p>
              <span>{{actor.name}}</span>
              <span>{{actor.role}}</span>
            </p>
          </detail-swiper-item>
        </detail-swiper>
    </div>
    <hr>
    <!-- 剧照模块 -->
    <div class="stills">
      <div class="stills-title">
        <h4>剧照</h4>
        <span v-if="filmInfo.photos">
          全部({{filmInfo.photos.length}})
          <i class="iconfont icon-jiantou2"></i>
        </span>
        <span v-else>暂无电影剧照</span>
      </div>
      <detail-swiper class="stills-items" :viewNum="2.3" name="photos">
        <detail-swiper-item v-for="(photo,index) in filmInfo.photos" :key="index" class="stills-item">
          <img :src="photo" alt="" @click="handlePreview(filmInfo.photos,index)">
        </detail-swiper-item>
      </detail-swiper>
    </div>
    <hr>
    <div class="bottomBtn" v-if="filmInfo.isPresale || filmInfo.isSale">
      选座购票
    </div>
  </div>
</template>

<script>
import http from '@/util/http'
import mixinsObj from '@/util/mixinsObj'
import moment from 'moment'
import detailSwiper from '@/components/details/DetailSwiper'
import detailSwiperItem from '@/components/details/DetailSwiperItem'
import detailHeader from '@/components/details/DetailHeader'
import Vue from 'vue'
import { ImagePreview } from 'vant'

Vue.directive('scroll', {
  inserted (el, binding) {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > binding.value) {
        el.classList.add('showHeader')
        el.querySelector('.iconfont').classList.add('showIcon')
      } else {
        el.classList.remove('showHeader')
        el.querySelector('.iconfont').classList.remove('showIcon')
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})

export default {
  name: 'Detail',
  mixins: [mixinsObj],
  data () {
    return {
      filmInfo: null,
      isHidden: true
    }
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  mounted () {
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=6873810`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(result => {
      console.log(result.data)
      this.filmInfo = result.data.data.film
    })
  },
  methods: {
    handleCategory (categoryStr) {
      return categoryStr.split('|').join(' | ')
    },
    handleTime (timestamp) {
      return moment(timestamp * 1000).format('YYYY-MM-DD')
    },
    handlePreview (images, index) {
      ImagePreview({
        images: images,
        startPosition: index,
        closeable: true
      })
    }
  },
  computed: {
    actorPhotos () {
      return this.filmInfo.actors.map(item => item.avatarAddress)
    }
  }
}
</script>

<style lang="scss" scoped>
hr{
  border: none;
  background-color: #f4f4f4;
  height: 10px;
}
.imgBox{
  height: 13.125rem;
  overflow: hidden;
  position: relative;
  img{
    width: 100%;
    position: absolute;
    transform: translateY(-30%);
  }
}
.filmInfos{
  font-size: 12px;
  padding:12px 15px 15px;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
      font-weight: normal;
      position: relative;
      font-size: 18px;
      span{
        background: #D2D6DC;
        color: white;
        font-size: 12px;
        padding: 0 2px;
        position: absolute;
        top: 50%;
        right: -27px;
        transform: translateY(-50%);
      }
    }
    span{
      color: orange;
      i{
        font-size: 18px;
      }
    }
  }
  p{
    color: rgba(0,0,0,0.6);
    margin-top: 4px;
    font-size: 13px;
  }
  .filmMemo{
    margin-top: 12px;
    line-height: 17px;
  }
  p:last-of-type{
    margin-top: 5px;
    color: #cccccc;
    text-align: center;
  }
}
.actorInfos{
  padding: 15px;
  overflow-x: auto;
  h4{
    font-weight: normal;
    padding-bottom: 15px;
    position: sticky;
    left: 0;
  }
  .actorInfo{
    display: flex;
    .actorItem{
      margin-right: 10px;
      width: 85px;
      img{
        width: 85px;
        height: 120px;
      }
      p{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-size: 12px;
        text-align: center;
        span{
          &:first-of-type{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &:last-of-type{
            color: rgba(0,0,0,0.6);
          }
        }
      }
    }
    .actorItem:last-of-type{
      padding-right: 15px;
    }
  }
}
.stills{
  padding: 15px;
  .stills-title{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    h4{
      font-weight: normal;
    }
    span{
      font-size: 13px;
      color: rgba(0,0,0,0.6);
    }
    span:last-of-type{
      display: flex;
      align-items: center;
      i{
        font-size: 12px;
        color: rgba(0,0,0,0.5);
      }
    }
  }
  .stills-items{
    display: flex;
    // overflow-x: auto;
    // overflow-y: hidden;
    overflow: hidden;
    .stills-item{
      display: flex;
      align-items: center;
      width: 150px;
      height: 100px;
      background-color: #F9F9F9;
      margin-right: 10px;
      img{
        // width: 150px; //方法一
        width: 100%;
      }
    }
    .stills-item:last-of-type{
      margin-right: 0;
    }
  }
}
.isHidden{
  overflow: hidden;
  height: 34px;
}
.bottomBtn{
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
  background: orange;
  color: white;
  text-align: center;
  line-height: 50px;
}
</style>
